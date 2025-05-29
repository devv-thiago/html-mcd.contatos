import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoModule, PoPageModule, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TabelaDinamicaComponent } from "../shared/components/tabela-dinamica/tabela-dinamica.component";
import { Grupo } from '../shared/models/grupo.model';
import { GruposService } from '../shared/services/grupos/grupos.service';

@Component({
  selector: 'app-grupos',
  imports: [
    CommonModule,
    PoPageModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule,
    TabelaDinamicaComponent
],
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  formularioGrupos = new FormGroup({
    nome: new FormControl<string>('', Validators.nullValidator),
    descricao: new FormControl<string>('',Validators.required)
  });
  constructor(private poNotification: PoNotificationService, private gruposService: GruposService) { }

  grupos: Grupo[] = []

  readonly columns: Array<PoTableColumn> = [
    {
      property: 'id',
      label: 'ID'
    },
    {
      property: 'nome',
      label: 'Nome'
    },{
      property: 'descricao',
      label: 'Descrição'
    }
  ]

  ngOnInit() {
    this.carregarGrupos()
  }

  carregarGrupos(){
    this.gruposService.getGrupos().subscribe({
      next: (res) => this.grupos = res,
      error: (err) => this.poNotification.error(`Erro ao carregar grupos: ${err}`)
    }

    )
  }

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
