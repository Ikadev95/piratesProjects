import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  foto: string = "/pappagalli/init.png";

  spada: boolean = false;
  cintura: boolean = false;
  bandana: boolean = false;
  cappellopirata: boolean = false;

  fotos: any[] = [
    {
      src: "/pappagalli/init.png",
      array: [false,false,false,false]
    },
    {
      src: "/pappagalli/bandana.png",
      array: [false,false,true,false]
    },
    {
      src:  "/pappagalli/cintura.png",
      array: [false,true,false,false]
    },
    {
      src:  "/pappagalli/cappellopirata.png",
      array: [false,false,false,true]
    },
    {
      src:  "/pappagalli/spada.png",
      array: [true,false,false,false]
    },
    {
      src:  "/pappagalli/spada-bandana.png",
      array: [true,false,true,false]
    },
    {
      src:  "/pappagalli/cintura-spada.png",
      array: [true,true,false,false]
    },
    {
      src:  "/pappagalli/cintura-bandana.png",
      array: [false,true,true,false]
    },
    {
      src:   "/pappagalli/spada-bandana.png",
      array: [true,false,true,false]
    },
    {
      src:   "/pappagalli/spada-cintura-bandana.png",
      array: [true,true,true,false]
    },
    {
      src:   "/pappagalli/spada-cappellopirata-cintura.png",
      array: [true,true,false,true]
    },
    {
      src:   "/pappagalli/cappellopirata-cintura.png",
      array: [false,true,false,true]
    },
    {
      src:  "/pappagalli/spada-cappellopirata.png",
      array: [true,false,false,true]
    }
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
    const selectedItems = [this.spada, this.cintura, this.bandana, this.cappellopirata];

    this.fotos.forEach(foto => {
      if(this.compare(foto.array, selectedItems)) {
        this.foto = foto.src;
      }
    });
  }

  compare(foto: boolean[], array: boolean[]): boolean {
    return foto.length === array.length && foto.every((val, index) => val === array[index]);
  }

}
