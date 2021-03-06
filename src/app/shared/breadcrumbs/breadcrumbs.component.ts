import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string;

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) { }

  ngOnInit() {
    this.getDataRoute().subscribe(({ titulo }) => {
      this.label = titulo;
      this.title.setTitle(titulo);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };

      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute() {
    return this.router.events
      .filter(evento => evento instanceof ActivationEnd)
      .filter((evento: ActivationEnd) => evento.snapshot.firstChild === null)
      .map((evento: ActivationEnd) => evento.snapshot.data);
  }

}
