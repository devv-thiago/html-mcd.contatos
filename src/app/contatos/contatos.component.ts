import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoMultiselectOption, PoPageModule } from '@po-ui/ng-components';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  imports: [
    CommonModule,
    PoPageModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
   form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required)
  });

  readonly options: Array<PoMultiselectOption > = [
      { label: 'Grupo 1', value: "1" },
      { label: 'Grupo 2', value: "2"},
    ];

  constructor() { }

  ngOnInit() { }

  cancel() {
    // cancel action here
  }

  save() {
    // save action here
  }

  saveNew() {
    // saveNew action here
  }

}
