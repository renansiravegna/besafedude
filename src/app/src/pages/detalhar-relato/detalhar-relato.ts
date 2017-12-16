import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
import { RelatosService } from '../../services/relatos.service';

@IonicPage()
@Component({
  selector: 'page-detalhar-relato',
  templateUrl: 'detalhar-relato.html',
})

export class DetalharRelatoPage {
  @ViewChild('observacoes') observacoesElement: any;
  categoria: { nome: string, icone: string };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private relatosService: RelatosService) {
    this.categoria = navParams.get('categoria');
  }

  relatar() {
    const mapaDeTiposDeRelato = {
      'Acidente': 0,
      'Roubo': 1,
      'Incêndio': 2,
    };

    this.geolocation.getCurrentPosition()
      .then((geoposition) => {
          const dados = {
            Data: new Date(),
            Descricao: this.observacoesElement.value,
            EmailDoUsuario: 'email@teste.com.br',
            Latitude: geoposition.coords.latitude,
            Longitude: geoposition.coords.longitude,
            TipoDeRelato: mapaDeTiposDeRelato[this.categoria.nome]
          };

          this.relatosService.relatar(dados).then((response) => this.navegarParaHome());
      });
  }

  cancelar() {
    this.navegarParaHome();
  }

  navegarParaHome() {
    this.navCtrl.push(HomePage);
  }
}
