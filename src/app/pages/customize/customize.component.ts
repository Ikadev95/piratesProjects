import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  foto: string = "/pappagalli/init.png";

  fotog: string = "/pappagalli/init2.png";

  spada: boolean = false;
  cintura: boolean = false;
  bandana: boolean = false;
  cappellopirata: boolean = false;
  genere:boolean = false;

  fotos: any[] = [
    {
      src: "/pappagalli/init.png",
      array: [false,false,false,false,false]
    },
    {
      src: "/pappagalli/bandana.png",
      array: [false,false,true,false,false]
    },
    {
      src:  "/pappagalli/cintura.png",
      array: [false,true,false,false,false]
    },
    {
      src:  "/pappagalli/cappellopirata.png",
      array: [false,false,false,true,false]
    },
    {
      src:  "/pappagalli/spada.png",
      array: [true,false,false,false,false]
    },
    {
      src:  "/pappagalli/spada-bandana.png",
      array: [true,false,true,false,false]
    },
    {
      src:  "/pappagalli/cintura-spada.png",
      array: [true,true,false,false,false]
    },
    {
      src:  "/pappagalli/cintura-bandana.png",
      array: [false,true,true,false,false]
    },
    {
      src:   "/pappagalli/spada-bandana.png",
      array: [true,false,true,false,false]
    },
    {
      src:   "/pappagalli/spada-cintura-bandana.png",
      array: [true,true,true,false,false]
    },
    {
      src:   "/pappagalli/spada-cappellopirata-cintura.png",
      array: [true,true,false,true,false]
    },
    {
      src:   "/pappagalli/cappellopirata-cintura.png",
      array: [false,true,false,true,false]
    },
    {
      src:  "/pappagalli/spada-cappellopirata.png",
      array: [true,false,false,true,false]
    },



    {
      src: "/pappagalli/init2.png",
      array: [false,false,false,false,true]
    },
    {
      src: "/pappagalli/bandana2.png",
      array: [false,false,true,false,true]
    },
    {
      src:  "/pappagalli/cintura2.png",
      array: [false,true,false,false,true]
    },
    {
      src:  "/pappagalli/cappellopirata2.png",
      array: [false,false,false,true,true]
    },
    {
      src:  "/pappagalli/spada2.png",
      array: [true,false,false,false,true]
    },
    {
      src:  "/pappagalli/spada-bandana2.png",
      array: [true,false,true,false,true]
    },
    {
      src:  "/pappagalli/cintura-spada2.png",
      array: [true,true,false,false,true]
    },
    {
      src:  "/pappagalli/cintura-bandana2.png",
      array: [false,true,true,false,true]
    },
    {
      src:   "/pappagalli/spada-bandana2.png",
      array: [true,false,true,false,true]
    },
    {
      src:   "/pappagalli/spada-cintura-bandana2.png",
      array: [true,true,true,false,true]
    },
    {
      src:   "/pappagalli/spada-cappellopirata-cintura2.png",
      array: [true,true,false,true,true]
    },
    {
      src:   "/pappagalli/cappellopirata-cintura2.png",
      array: [false,true,false,true,true]
    },
    {
      src:  "/pappagalli/spada-cappellopirata2.png",
      array: [true,false,false,true,true]
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
      case 'genere':
        this.genere = !this.genere;
        if(this.fotog === "/pappagalli/init2.png"){this.fotog = "/pappagalli/init.png"}
        else{
          this.fotog = "/pappagalli/init2.png"
        }
        break;
    }
    this.updateFoto();
  }

  updateFoto() {
    const selectedItems = [this.spada, this.cintura, this.bandana, this.cappellopirata, this.genere];

    this.fotos.forEach(foto => {
      if(this.compare(foto.array, selectedItems)) {
        this.foto = foto.src;
      }
    });
  }

  compare(foto: boolean[], array: boolean[]): boolean {
    return foto.length === array.length && foto.every((val, index) => val === array[index]);
  }



  send(){
    //qui inviamo il dato al db
  }
}
