import { Routes } from '@angular/router';
import { GruposComponent } from './grupos/grupos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'grupos',
    component: GruposComponent
  },
  {
    path: 'contatos',
    component: ContatosComponent
  },
  {
    path: 'html-mcd.contatos',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: 'grupos',
    pathMatch: 'full'
  }
];
