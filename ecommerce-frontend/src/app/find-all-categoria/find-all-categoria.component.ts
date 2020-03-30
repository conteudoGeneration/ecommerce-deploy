import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriasService } from '../service/categorias.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-find-all-categoria',
  templateUrl: './find-all-categoria.component.html',
  styleUrls: ['./find-all-categoria.component.css']
})
export class FindAllCategoriaComponent implements OnInit {
  
 
  listaCategorias: Categoria[];

  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
    this.findAllCategorias();
  }

  findAllCategorias(){
    this.categoriasService.getAllCategorias().subscribe((resp: Categoria[])=>{
      console.log(resp);
      this.listaCategorias= resp;
    },err =>{
        alert(`Erro cod: ${err.message}`);
    })
  }


  novo(){
    this.router.navigate(['/postCategorias','categoria.id']);
  }

}
