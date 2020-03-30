import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../service/produtos.service';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  
  produto = new Produto()
  descricao:string
  nome:string = localStorage.getItem('nome')
  logado:string
  constructor(private route: ActivatedRoute, private produtosService: ProdutosService, private categoriasService: CategoriasService, private router: Router) {}

  ngOnInit(): void {    
    let id:number = this.route.snapshot.params["id"];
    this.findById(id)

    if (localStorage.getItem('token')){
      this.logado = 'logado'
    } else {
      this.logado = 'deslogado'
    }
  }
  

  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto=resp
      this.descricao = this.produto.categoria.descricao
    }, err => {
      console.log("erro não interpretado")
    });
  }

  



}
