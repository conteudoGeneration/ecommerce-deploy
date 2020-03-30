import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../service/categorias.service';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-post-categoria',
  templateUrl: './post-categoria.component.html',
  styleUrls: ['./post-categoria.component.css']
})
export class PostCategoriaComponent implements OnInit {
  
  id:number;
  novo: boolean = false;
  categoria: Categoria = new Categoria()

  constructor(private route: ActivatedRoute, private router:Router, private categoriasService: CategoriasService) { }

  ngOnInit() {

    
    
    if (localStorage.getItem('token') && localStorage.getItem('vendedor') == "false" ){
      alert('Faça o login primeiro')
      this.router.navigate(['/login'])
    }else {
        this.id = this.route.snapshot.params["id"];
        console.log(this.id)
      if (this.id == undefined){
        this.novo = true;
        console.log('Esse é o novo se ture:' + this.novo)
      } else {
        this.findById(this.id);
        this.novo = false;
        console.log('Esse é o novo se false:' + this.novo)
      } 
    }
    
  
  }

  

  findById(id:number){
    this.categoriasService.getByIdCategoria(this.id).subscribe((resp: Categoria)=>{
      this.categoria=resp
    
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  save(){
    if (this.novo) {
      this.categoriasService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
        this.categoria= resp;
        this.router.navigate(['/categorias']);
      })
      
    } else {
      this.categoriasService.putCategoria(this.categoria).subscribe((resp: Categoria)=>{
        this.categoria= resp;
        this.router.navigate(['/categorias']);
      })
    }
  }

}
