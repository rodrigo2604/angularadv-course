import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
  }

  cambiarColor(tema: string, link: any) {

    this.aplicarCheck(link);

    const url = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', url);

  }

  private aplicarCheck(link: any) {
    const selectores = this.document.getElementsByClassName('selector');

    [].forEach.call(selectores, ref => {
      ref.classList.remove('working');
    });

    link.classList.add('working');
  }

}
