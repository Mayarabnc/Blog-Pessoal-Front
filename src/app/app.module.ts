import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy,LocationStrategy } from '@angular/common'; /*faz com que nunca se perca entre as rotas*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditarComponent } from './editar/tema-editar/tema-editar.component';
import { TemaDeletarComponent } from './deletar/tema-deletar/tema-deletar.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    TemaComponent,
    TemaEditarComponent,
    TemaDeletarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:LocationStrategy,         //configura o LocationStrategy e o HashLocationStrategy,
    useClass: HashLocationStrategy    // os transformando em objetos.
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
