import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
                                      /*garante que o meu endpoint vai receber um objeto que eu quero*/ /*tipo*/
  entrar(UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>("https://blogpessoalmayarabnc.herokuapp.com/usuarios/logar", UserLogin)                /*tipo*/
  }

  cadastrar(User: User): Observable<User>{
    return this.http.post<User>("https://blogpessoalmayarabnc.herokuapp.com/usuarios/cadastrar", User)
  }
}
