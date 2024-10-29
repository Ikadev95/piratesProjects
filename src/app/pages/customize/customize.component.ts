import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.scss'
})
export class CustomizeComponent implements OnInit{

  foto:string = "/pappagalli/init.png"

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
    "/pappagalli/cappellopirata.png"
  ]


  ngOnInit(): void {
    console.log(this.fotos.filter(foto => foto.includes("cappello")))
    console.log(this.fotos.filter(foto => foto === "cappellopirata"))
  }


}
