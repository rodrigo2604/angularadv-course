import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document, public ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this.ajustes.aplicarTema(tema);
  }

  colocarCheck() {
    const selectores = this.document.getElementsByClassName('selector');
    const { tema } = this.ajustes.getAjustes();

    [].forEach.call(selectores, ref => {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
      }
    });
  }

  private aplicarCheck(link: any) {
    const selectores = this.document.getElementsByClassName('selector');

    [].forEach.call(selectores, ref => {
      ref.classList.remove('working');
    });

    link.classList.add('working');
  }

}
