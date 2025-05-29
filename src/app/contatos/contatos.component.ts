import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule, PoMultiselectOption, PoNotificationService, PoPageModule, PoTableColumn } from '@po-ui/ng-components';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TabelaDinamicaComponent } from "../shared/components/tabela-dinamica/tabela-dinamica.component";
import { Contato } from '../shared/models/contato.model';
import { ContatosService } from '../shared/services/contatos/contatos.service';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [
    CommonModule,
    PoPageModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule,
    TabelaDinamicaComponent
  ],
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  formularioContatos = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    cargo: new FormControl('', Validators.required),
    numero: new FormControl('', [Validators.minLength(11), Validators.maxLength(11)])
  });

  readonly options: Array<PoMultiselectOption> = [
    { label: 'Grupo 1', value: "1" },
    { label: 'Grupo 2', value: "2" }
  ];

  readonly columns: Array<PoTableColumn> = [
    { property: 'id', label: 'ID' },
    { property: 'nome', label: 'Nome' },
    { property: 'email', label: 'E-mail' },
    { property: 'telefone', label: 'Telefone' },
    { property: 'grupos', label: 'Grupos' }
  ];

  contatos: Contato[] = []; // variável para armazenar os dados

  constructor(
    private poNotification: PoNotificationService,
    private contatosService: ContatosService
  ) {}

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    this.contatosService.getContatos().subscribe({
      next: (res) => this.contatos = res,
      error: (err) => this.poNotification.error(`Erro ao carregar contatos: ${err}`)
    });
  }

  cancel() {
    // cancel action here
  }

  save() {
    if (this.formularioContatos.invalid) {
      this.poNotification.information("Dados inválidos");
    } else {
      this.poNotification.success("Dados salvos");
      // aqui você pode chamar o service para salvar o contato futuramente
    }
  }

  saveNew() {
    // saveNew action here
  }

}
