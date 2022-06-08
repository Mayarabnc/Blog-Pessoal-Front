import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeletarComponent } from './deletar/tema-deletar/tema-deletar.component';
import { TemaEditarComponent } from './editar/tema-editar/tema-editar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
                  /*define que rota aparecera quando o endereço estiver vazio */
  {path:"", redirectTo:"entrar", pathMatch: "full"},
                                               /*força a trazer toda a rota*/
                                               
  {path:"entrar", component:EntrarComponent},
  {path:"cadastrar", component:CadastrarComponent},
  
  {path:"inicio", component:InicioComponent},
  {path:"tema", component:TemaComponent},
                      /*parametro por rota*/
  {path:"tema-editar/:id", component: TemaEditarComponent},
  {path: "tema-deletar/:id", component: TemaDeletarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
