import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from "../index.paginas";

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any=Pagina3Page;

  mutantes:any[]=[
    {
      nombre:"Magneto",
      poder:"Controlar Metales"
    },
    {
      nombre:"Wolverine",
      poder:"Regeneración Acelerada"
    },
    {
      nombre:"Profesor X",
      poder:"Poderes Psíquicos"
    },
    {
      nombre:"Gambito",
      poder:"Cargar Objetos Inanimados con Energía"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  irPagina3(mutante:any){
    console.log( mutante );
    this.navCtrl.push( Pagina3Page, { 'mutante':mutante });
  }

}
