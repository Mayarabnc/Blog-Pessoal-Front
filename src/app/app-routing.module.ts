import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
                  /*define que rota aparecera quando o endereço estiver vazio */
  {path:"", redirectTo:"entrar", pathMatch: "full"},
                                               /*força a trazer toda a rota*/
                                               
  {path:"entrar", component:EntrarComponent},
  {path:"cadastrar", component:CadastrarComponent},
  {path:"inicio", component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
