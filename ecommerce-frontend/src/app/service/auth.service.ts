import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set
    ('Authorization',localStorage.getItem('token'))
  }

  cadastrar(user: Usuario){
    return this.http.post("http://localhost:9000/usuarios/cadastrar", user)
  }

  logar(userLogin: UsuarioLogin){
    return this.http.post("http://localhost:9000/usuarios/logar", userLogin)
  }


}
