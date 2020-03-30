import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set
    ('Authorization',localStorage.getItem('token'))
  }

  getAllProdutos(){
    return this.http.get("http://localhost:9000/produtos")
  }
  
  getByIdProduto(id: number){
    return this.http.get(`http://localhost:9000/produtos/porId/${id}`)
  }

  postProduto(produto: Produto){
    return this.http.post("http://localhost:9000/produtos", produto, this.token)
  }

  putProduto( produto: Produto){
    return this.http.put("http://localhost:9000/produtos", produto, this.token)
  }

  delete(id:number){
    return this.http.delete(`http://localhost:9000/produtos/${id}`, this.token)
  }

  findByName(nome:string){
    return this.http.get(`http://localhost:9000/produtos/nome/${nome}`, this.token)
  }
}
