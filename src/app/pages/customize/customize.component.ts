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
    "/pappagalli/init.png",
    "/pappagalli/bandana.png",
    "/pappagalli/cintura.png",
    "/pappagalli/cappellopirata.png",
    "/pappagalli/spada.png",
    "/pappagalli/spada-bandana.png",
    "/pappagalli/cintura-spada.png",
    "/pappagalli/cintura-bandana.png",
    "/pappagalli/spada-bandana.png",
    "/pappagalli/spada-cintura-bandana.png",
    "/pappagalli/spada-cappellopirata-cintura.png",
    "/pappagalli/cappellopirata-cintura.png",
    "/pappagalli/spada-cappellopirata.png"
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

  search(searchString: string): any {
    const results = [];
    for (let i = 0; i < this.fotos.length; i++) {
        const foto = this.fotos[i];
        if (foto.includes(searchString)) {
            results.push(foto);
        }
    }
    return results;
}


  updateFoto() {
    const selectedItems = [];
    if (this.spada) selectedItems.push('spada');
    if (this.cintura) selectedItems.push('cintura');
    if (this.bandana) selectedItems.push('bandana');
    if (this.cappellopirata) selectedItems.push('cappellopirata');


    const searchString = selectedItems.join('-') + '.png'

    this.foto = this.search(searchString)

  }

}
