import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  private ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private document) {
    this.aplicarTema(this.getAjustes().tema);
  }

  guardarAjustes(ajustes: Ajustes) {
    localStorage.setItem('ajustes', JSON.stringify(ajustes));
  }

  aplicarTema(tema: string) {
    const temaUrl = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', temaUrl);

    this.guardarAjustes({ temaUrl, tema });
  }

  getAjustes(): Ajustes {
    return JSON.parse(localStorage.getItem('ajustes')) || this.ajustes;
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
