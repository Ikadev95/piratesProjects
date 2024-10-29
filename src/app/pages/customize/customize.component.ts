import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.scss'
})
export class CustomizeComponent implements OnInit {

  foto: string = "/pappagalli/init.png";

  bandana: boolean = false;
  spada: boolean = false;
  cintura: boolean = false;
  cappellopirata: boolean = false;

  fotos: string[] = [
    "init.png",
    "bandana.png",
    "cintura.png",
    "cappellopirata.png",
    "spada.png",
    "spada-bandana.png",
    "cintura-spada.png",
    "cintura-bandana.png",
    "spada-bandana.png",
    "spada-cintura-bandana.png",
    "spada-cappellopirata-cintura.png",
    "cappellopirata-cintura.png",
    "spada-cappellopirata.png"
  ];

  ngOnInit(): void {
  }

  toggleItem(element: string) {
    switch(element) {
      case 'spada':
        this.spada = !this.spada;
        break;
      case 'cintura':
        this.cintura = !this.cintura;
        break;
      case 'bandana':
        this.bandana = !this.bandana;
        if (this.bandana) this.cappellopirata = false;
        break;
      case 'cappellopirata':
        this.cappellopirata = !this.cappellopirata;
        if (this.cappellopirata) this.bandana = false;
        break;
    }
    this.updateFoto();
  }

  updateFoto() {
    const selectedItems = [];
    if (this.spada) selectedItems.push('spada');
    if (this.cintura) selectedItems.push('cintura');
    if (this.bandana) selectedItems.push('bandana');
    if (this.cappellopirata) selectedItems.push('cappellopirata');


    const searchString = selectedItems.join('-') + '.png'; // questo ancora non va perchè non sempre sono nell'ordine corretto

      if(this.fotos.find(foto => foto === searchString)){
        this.foto = `/pappagalli/${searchString}`
      }
      else{
        if(this.fotos.includes(searchString)){
          console.log('no')
        }
        else{
          this.foto = '/pappagalli/init.png'
        }
      }
  }

}
