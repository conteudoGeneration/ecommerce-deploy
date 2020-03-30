import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {
  delOk:boolean = false
  categoria: Categoria = new Categoria()
  
  constructor(private route: ActivatedRoute, private router:Router, private categoriasService: CategoriasService) { }

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
    this.categoriasService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria=resp
      console.log(this.categoria);
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  btnSim(){
    this.categoriasService.delete(this.categoria.id).subscribe(()=>{
      this.delOk = true
      this.router.navigate(['/categorias']);

  }, err => {
    console.log(err);
  });
  }

  btnNao(){
    this.router.navigate(['/categorias']);
  }

}
