import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any={};

  constructor(public navParams: NavParams, private navController:NavController ) {
      console.log( navParams );
      this.mutante = this.navParams.get("mutante");
  }

  irAtras(){
    this.navController.pop();
  }
  irRoot(){
    this.navController.popToRoot();
  }


}
