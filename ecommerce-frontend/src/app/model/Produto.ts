// Objeto para consumo do back-end

import { Categoria } from './Categoria';

export class Produto{

        public id:number
        public nome:string
        public urlImagem:string
        public qtdStoque:number
        public valor:number
        public categoria: Categoria
    
   
}

