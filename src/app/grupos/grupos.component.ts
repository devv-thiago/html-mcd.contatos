import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoPageModule } from '@po-ui/ng-components';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Grupo } from '../shared/models/grupo.model';

@Component({
  selector: 'app-grupos',
  imports: [
    CommonModule,
    PoPageModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  form = new FormGroup({
    nome: new FormControl<string>('', {nonNullable: true}),
    descricao: new FormControl<string>('', {nonNullable: true})
  });
  constructor() { }

  ngOnInit() { }

  cancel() {
    // cancel action here
  }

  save() {
    // save action here
    if(this.form.value.nome === "" || this.form.value.descricao === "") {
      alert("Dados não podem ser nulos")
    } else {
      alert(this.form.value.nome + " - " + this.form.value.descricao)
    }

  }

  saveNew() {
    // saveNew action here
  }

}
