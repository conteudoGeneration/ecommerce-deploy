import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set
    ('Authorization',localStorage.getItem('token'))
  }

  getAllCategorias(){
    return this.http.get("http://localhost:9000/categorias")
  }

  getByIdCategoria(id: number){
    return this.http.get(`http://localhost:9000/categorias/${id}`, this.token)
  }

  postCategoria(categoria: Categoria){
    return this.http.post("http://localhost:9000/categorias", categoria, this.token)
  }

  putCategoria( categoria: Categoria){
    return this.http.put("http://localhost:9000/categorias", categoria, this.token)
  }

  delete(id:number){
    return this.http.delete(`http://localhost:9000/categorias/${id}`, this.token)
  }

  findByName(descricao:string){
    return this.http.get(`http://localhost:9000/categorias/nome/${descricao}`, this.token)
  }
 
}
