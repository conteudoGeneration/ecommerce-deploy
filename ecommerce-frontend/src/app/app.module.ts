import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FindAllProdutoComponent } from './find-all-produto/find-all-produto.component';
import { HttpClientModule } from '@angular/common/http'; //import do HttpClientModule
import { FormsModule } from '@angular/forms';
import { FindAllCategoriaComponent } from './find-all-categoria/find-all-categoria.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { FindByNameCategoriaComponent } from './find-by-name-categoria/find-by-name-categoria.component';
import { PostProdutoComponent } from './post-produto/post-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CompraComponent } from './compra/compra.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FindAllProdutoComponent,
    FindAllCategoriaComponent,
    PostCategoriaComponent,
    DeleteCategoriaComponent,
    FindByNameCategoriaComponent,
    PostProdutoComponent,
    DeleteProdutoComponent,
    LoginComponent,
    CadastroComponent,
    CompraComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
