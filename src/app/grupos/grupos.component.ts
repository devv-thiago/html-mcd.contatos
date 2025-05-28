import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoPageModule, PoNotificationService } from '@po-ui/ng-components';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  formularioGrupos = new FormGroup({
    nome: new FormControl<string>('', Validators.nullValidator),
    descricao: new FormControl<string>('',Validators.required)
  });
  constructor(private poNotification: PoNotificationService) { }

  ngOnInit() { }

  cancel() {
    // cancel action here
  }

  save() {
    // save action here
    if(this.formularioGrupos.value.nome === "" || this.formularioGrupos.value.descricao === "") {
      this.poNotification.information("Dados inválidos, revise o cadastro")
    } else {
      this.poNotification.success("Dados salvos")
    }

  }

  saveNew() {
    // saveNew action here
  }

}
