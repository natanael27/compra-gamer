import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { LocalstorageService } from './services/localstorage.service';
import { LoginComponent } from './components/login/login.component';

import { SharedModule } from './components/shared/shared.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProdFiltradosComponent } from './components/prod-filtrados/prod-filtrados.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComprasComponent,
    LoginComponent,
    CategoriasComponent,
    ProdFiltradosComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,

    ScrollingModule,
    MatMenuModule,
    MatToolbarModule
  
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
