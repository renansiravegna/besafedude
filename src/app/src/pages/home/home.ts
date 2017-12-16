import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';

import { NavController } from 'ionic-angular';
import { RelatarPage } from '../relatar/relatar';

import { RelatosService } from '../../services/relatos.service';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  relatosProximos: Array<any>;
  relatosDistantes: Array<any>;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private relatosService: RelatosService,
    private geolocation: Geolocation) { }

  ionViewDidLoad() {
    this.loadLocation()
      .then((geoposition) => {
        this.loadMap(geoposition);
        this.loadMarkers(geoposition);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  loadLocation() {
    return this.geolocation.getCurrentPosition();
  }

  loadMap(geoposition) {
    const latLng = new google.maps.LatLng(geoposition.coords.latitude,
      geoposition.coords.longitude);

    console.log(geoposition.coords);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    new google.maps.Marker({
      position: latLng,
      map: this.map,
    });
  }

  loadMarkers(geoposition) {
    this.relatosService.obterTodos(geoposition.coords)
      .then((relatos) => {
        this.relatosProximos = relatos.proximos;
        this.relatosDistantes = relatos.distantes.slice(0, 10);

        this.mapearRelatos(this.relatosProximos);
        this.mapearRelatos(this.relatosDistantes);

        this.exibirAlerta();
      });
  }

  mapearRelatos(relatos) {
    for (const relato of relatos) {
      const latLng = new google.maps.LatLng(parseFloat(relato.Latitude),
        parseFloat(relato.Longitude));

      new google.maps.Marker({
        position: latLng,
        map: this.map,
        icon: `/assets/icon/${relato.Icone}.png`,
        title: relato.Descricao
      });
    }
  }

  exibirAlerta() {
    const relatoMaisProximo = this.relatosProximos[0];
    const descricao = relatoMaisProximo.Descricao;

    this.toastCtrl.create({
      message: `Há um relato de
        ${descricao.charAt(0).toLowerCase() + descricao.slice(1)}
          próximo à você, considere mudar de rota ou siga com cautela
      `,
      duration: 7000,
      position: 'top'
    }).present();
  }

  relatar() {
    this.navCtrl.push(RelatarPage);
  }

  confirmarRelato(relato: any) {
    relato.Confirmado = !relato.Confirmado;
  }
}
