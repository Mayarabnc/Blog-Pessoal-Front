import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-editar',
  templateUrl: './tema-editar.component.html',
  styleUrls: ['./tema-editar.component.css']
})
export class TemaEditarComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      this.router.navigate(["/entrar"])
    }
                                          /*nome do parametro na rota*/
    let id = this.route.snapshot.params["id"]
    /*pega a rota que está ativa no momento, para pegar o numero do id*/

    this.findByIdTema(id)
    /*fala o que fazer com o parametro, no caso traz o tema*/
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp:Tema)=>{
      this.tema = resp
      alert("Oba! tema atualizado com sucesso")
      this.router.navigate(["/tema"])
    })
  }

}
