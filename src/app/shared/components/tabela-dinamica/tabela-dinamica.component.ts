import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-tabela-dinamica',
  imports: [
    CommonModule,
    PoModule
  ],
  templateUrl: './tabela-dinamica.component.html',
  styleUrls: ['./tabela-dinamica.component.css']
})
export class TabelaDinamicaComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() columns: Array<PoTableColumn> = [

  ]

  readonly actions: Array<PoTableAction > = [
      { label: "Editar", icon: 'an an-pencil-simple'},
      { label: "Excluir", icon: 'an an-trash'},
    ];

  constructor(

  ) { }

  ngOnInit() { }

}
