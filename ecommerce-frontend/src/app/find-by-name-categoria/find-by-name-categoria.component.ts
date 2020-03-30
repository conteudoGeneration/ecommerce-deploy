import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../service/categorias.service';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-find-by-name-categoria',
  templateUrl: './find-by-name-categoria.component.html',
  styleUrls: ['./find-by-name-categoria.component.css']
})
export class FindByNameCategoriaComponent implements OnInit {
  
  listaCategorias: Categoria[];
  nome:string;
  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
   
  }

  findByNameCategoria(){
    this.categoriasService.findByName(this.nome).subscribe((resp: Categoria[])=>{
      console.log(resp);
      this.listaCategorias= resp;
    },err =>{
        console.log(err)
    })
  }

}
