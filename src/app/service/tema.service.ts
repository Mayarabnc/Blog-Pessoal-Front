import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {                      /*colocar*/               /*valor que vou colocar*/
    headers: new HttpHeaders().set("Authorization", environment.token)
  }                                       /*nome de onde eu vou colocar*/
                                /*arei de um objeto*/
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>("https://blogpessoalmayarabnc.herokuapp.com/tema", this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>("https://blogpessoalmayarabnc.herokuapp.com/tema", tema, this.token)
  }
}
