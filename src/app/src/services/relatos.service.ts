import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import DistanciaService from './distancia.service';

@Injectable()
export class RelatosService {
  constructor(protected http: Http) { }

  obterTodos(coordenadasAtuais) {
    const http = this.http;

    return new Promise<any>(function(resolve) {
      http.get('http://besafedude.digix.com.br/Relato/ObterTodos')
        .subscribe((response: any) => {
          const relatos = JSON.parse(response._body);
          resolve(detalharRelatos(coordenadasAtuais, relatos));
        });
    });
  }

  relatar(relato) {
    const http = this.http;

    return new Promise<any>(function(resolve) {
      http.post('http://besafedude.digix.com.br/Relato/Relatar', relato)
        .subscribe((response: any) => {
          resolve(response);
        });
    });
  }
}

function detalharRelatos(coordenadasAtuais, relatos) {
  const distanciaMaximaDeProximidade = 1;

  const mapaDeDescricoes = {
    0: 'Acidente',
    1: 'Roubo',
    2: 'Incêndio',
  };

  const mapaDeIcones = {
    0: 'car',
    1: 'cash',
    2: 'flame',
  };

  const relatosMapeadosComOrdenacao = relatos
    .map((relato) => {
      relato.Descricao = mapaDeDescricoes[relato.TipoDeRelato];
      relato.Icone = mapaDeIcones[relato.TipoDeRelato];

      relato.Distancia = DistanciaService.calcularDistancia(
        parseFloat(coordenadasAtuais.latitude),
        parseFloat(coordenadasAtuais.longitude),

        parseFloat(relato.Latitude),
        parseFloat(relato.Longitude)
      );

      return relato;
    })
    .sort((relato1, relato2) => {
      if (relato1.Distancia > relato2.Distancia)
        return 1;

      if (relato1.Distancia < relato2.Distancia)
        return -1;

      return 0;
    });

    return {
      proximos: relatosMapeadosComOrdenacao.filter((relato) => relato.Distancia <= distanciaMaximaDeProximidade),
      distantes: relatosMapeadosComOrdenacao.filter((relato) => relato.Distancia > distanciaMaximaDeProximidade),
    };
}
