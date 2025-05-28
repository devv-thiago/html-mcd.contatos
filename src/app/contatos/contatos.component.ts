import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoMultiselectOption, PoNotificationService, PoPageModule } from '@po-ui/ng-components';
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
   formularioContatos = new FormGroup({
    nome: new FormControl('', Validators.required,),
    email: new FormControl('', Validators.email),
    cargo: new FormControl('', Validators.required),
    numero: new FormControl('',[ Validators.minLength(11),Validators.maxLength(11)])
  });

  readonly options: Array<PoMultiselectOption > = [
      { label: 'Grupo 1', value: "1" },
      { label: 'Grupo 2', value: "2"},
    ];

  constructor(private poNotification: PoNotificationService) {

  }

  ngOnInit() { }

  cancel() {
    // cancel action here
  }

  save() {
    // save action here
    if(this.formularioContatos.invalid){
      this.poNotification.information("Dados inválidos")
    } else {
      this.poNotification.success("Dados salvos")
    }
  }

  saveNew() {
    // saveNew action here
  }

}
