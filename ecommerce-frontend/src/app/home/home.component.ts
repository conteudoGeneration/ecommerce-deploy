import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';
import { Location } from '@angular/common';
import { CategoriasService } from '../service/categorias.service';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produto = new Produto()
  listaCategorias: Categoria[]
  produtosCategoria: Produto[]
  listaProdutos: Produto[]
  nome:string = localStorage.getItem('nome')

  id:number = this.route.snapshot.params["id"];
  constructor(private produtosService: ProdutosService, private categoriasService: CategoriasService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.findAllProdutos()
    this.findAllCategorias()
    this.findByIdCategoria(0)

  }

  findByIdCategoria(id:number){
    if ( id >= 1 ){
      this.categoriasService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
        this.produtosCategoria = resp.produtos  
        console.log(resp)      
      }, err => {
        console.log(this.produtosCategoria)
      });
    } else {
      this.produtosService.getAllProdutos().subscribe((resp: Produto[])=>{
        this.produtosCategoria = resp
      })
    }
    
  }

  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produto[])=>{
    this.listaProdutos= resp;
    }, err => {
      console.log('Não tem produtos ao carregar')
    }
    )
  }

  findAllCategorias(){
    this.categoriasService.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.listaCategorias= resp;
    },err =>{
        alert(`Erro cod: ${err.message}`);
    })
  }

  
    findById(id:number){
      this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
        this.produto=resp
      }, err => {
        console.log("erro não interpretado")
      });
    }
  
    novo(){
      this.router.navigate(['/postProdutos','produto.id']);
    }
 
}
