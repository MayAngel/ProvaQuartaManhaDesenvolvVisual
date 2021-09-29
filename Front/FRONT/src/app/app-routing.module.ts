import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/musicas/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/musicas/listar/listar.component';

const routes: Routes = [
  {
    path: "",
    component: ListarComponent,
  },
  {
    path: "musicas/listar",
    component: ListarComponent,
  },
  {
    path: "musicas/cadastrar",
    component: CadastrarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
