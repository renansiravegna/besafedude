import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalharRelatoPage } from '../detalhar-relato/detalhar-relato';

@IonicPage()
@Component({
  selector: 'page-relatar',
  templateUrl: 'relatar.html',
})

export class RelatarPage {
  categorias: Array<{ nome: string, icone: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categorias = [
      { nome: 'Incêndio', icone: 'flame' },
      { nome: 'Acidente', icone: 'car' },
      { nome: 'Roubo', icone: 'cash' },
    ];
  }

  iniciarRelato(categoria) {
    this.navCtrl.push(DetalharRelatoPage, {
      categoria: categoria
    });
  }
}
