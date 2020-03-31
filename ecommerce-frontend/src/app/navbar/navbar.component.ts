import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logado:string
  token:string
  nome:string = localStorage.getItem('nome')
  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('token')
    

    if (this.token){
      this.logado = 'logado '
        if (localStorage.getItem('vendedor') == 'true'){
          this.logado += 'vendedor'
        } else{
          this.logado += 'cliente'
        } 
    } else {
      this.logado = 'deslogado'
      
    }

    

  }



  logout(){
    localStorage.clear()
    this.router.navigate(['/home'])  
    location.assign('')
  }

}
