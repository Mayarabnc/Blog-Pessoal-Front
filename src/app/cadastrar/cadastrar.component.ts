import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: User = new User;
  confirmarSenha: string;
  tipoUser: string;

  constructor(
    private auth: AuthService,
              /*injeção de dependência */

    private router: Router
  ) { }       

      /*quando a minha pagina iniciar faça isso*/
  ngOnInit(){
    window.scroll(0,0); /*fica no x = 0 e no y = 0 */
  }

confirmeSenha(event: any) {
  this.confirmarSenha = event.target.value;
}

tipoUsuario(event: any){
  this.tipoUsuario = event.target.value;

}

cadastrar(){
  this.usuario.tipo = this.tipoUser;

    if(this.usuario.senha != this.confirmarSenha){
      alert("Ops, as senhas não estão iguais");
    } else {                                /*transforma o objeto typeScript em um objeto Json*/
      this.auth.cadastrar(this.usuario).subscribe((resp: User)=> {
        this.usuario = resp
                        /*faz com que depois que der certo volte para a rota definida*/
        this.router.navigate(["/entrar"])
        alert("Usuário cadastrado com sucesso");
      });
    }

  }
}
