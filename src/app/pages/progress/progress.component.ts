import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number;
  progreso2: number;

  constructor() { }

  ngOnInit() {
    this.progreso1 = 30;
    this.progreso2 = 70;
  }

  actualizar(event: number) {
    console.log('Evento', event);
  }

}
