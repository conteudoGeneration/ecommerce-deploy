import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produto';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  faMinus = faMinus
  faPlus = faPlus
  
  produto = new Produto()
  
  numero:number = 0
  valor:number
  descricao:string
  nome:string = localStorage.getItem('nome')

  constructor(private route: ActivatedRoute, private produtosService: ProdutosService, private categoriasService: CategoriasService, private router: Router) {}

  ngOnInit(): void {    
  
    let id:number = this.route.snapshot.params["id"];
    this.findById(id)
  }
  

  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto=resp
      this.descricao = this.produto.categoria.descricao
    }, err => {
      console.log("erro não interpretado")
    });
  }

  somar(){
    this.numero = this.numero + 1
    this.valor = this.numero * this.produto.valor
  }

  sub(){
    this.numero = this.numero - 1
    this.valor = this.numero * this.produto.valor
  }


}
