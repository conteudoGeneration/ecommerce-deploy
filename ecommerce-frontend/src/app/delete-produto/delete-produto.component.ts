import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {
  
  delOk:boolean = false
  produto = new Produto()
  
  constructor(private route: ActivatedRoute, private router:Router, private produtosService: ProdutosService) { }

  ngOnInit() {

    if (localStorage.getItem('token') && localStorage.getItem('vendedor') == "false" ){
      alert('Faça o login primeiro')
      this.router.navigate(['/login'])
    } else {
      let id:number = this.route.snapshot.params["id"];
      this.findById(id)
    }
    
  }

  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto=resp
      console.log(this.produto);
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  btnSim(){
    this.produtosService.delete(this.produto.id).subscribe(()=>{
      this.delOk = true
      this.router.navigate(['/produtos']);

  }, err => {
    console.log(err);
  });
  }

  btnNao(){
    this.router.navigate(['/produtos']);
  }

}
