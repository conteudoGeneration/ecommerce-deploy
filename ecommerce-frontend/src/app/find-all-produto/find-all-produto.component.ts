import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../model/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-all-produto',
  templateUrl: './find-all-produto.component.html',
  styleUrls: ['./find-all-produto.component.css']
})
export class FindAllProdutoComponent implements OnInit {

  listaProdutos: Produto[];
  vendedor:string

  constructor(private produtosService: ProdutosService, private router: Router) {}

  ngOnInit(): void {
    this.findAllProdutos()
    if (localStorage.getItem('token')){
        
      if (localStorage.getItem('vendedor') == 'true'){
          this.vendedor = 'vendedor'
        } else{
          this.vendedor = 'cliente'
        } 
    } else {
      this.vendedor = 'deslogado'
      this.findAllProdutos()
    }
   
  }

  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos= resp;
    })
  }

  novo(){
    this.router.navigate(['/postProdutos','produto.id']);
  }

}
