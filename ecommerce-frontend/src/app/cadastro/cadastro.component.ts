import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user = new Usuario()
  senha: string
  email: string
  vendedor: boolean
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  conferirSenha(event: any) {
    this.senha = event.target.value;
    console.log(this.senha)
  }

  conferirVendedor(event: any) {
    let check: string
    check = event.target.value;
    if (check == "on") {
      this.user.vendedor = true
    } else {
      this.user.vendedor = false
    }
    console.log(this.vendedor)
  }

  public cadastrar() { 
    if (this.senha == this.user.senha && this.user.usuario.includes('@') && this.user.usuario.includes('.com')) {
       this.authService.cadastrar(this.user).subscribe((res: Usuario) => { 
         this.user = res; 
         this.router.navigate(['/login']); 
        }, err => { 
          alert("campos invalidos") 
        }) 
      } else { 
        alert("senha ou email nao confere") 
      } 
    }
}
