import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { subcategoria } from 'src/app/subcategoria.model';

@Injectable({
  providedIn: 'root'
})
export class FiltroCategoriasService {

  categorias:subcategoria[]=[];
  categoriaSelect!:subcategoria;
  select$:BehaviorSubject<subcategoria[]>=new BehaviorSubject<subcategoria[]>([]);
  filtroBs:BehaviorSubject<subcategoria>=new BehaviorSubject<subcategoria>(this.categoriaSelect);

  constructor() { }

  selectCategoria(categoria:subcategoria){
    this.categorias.push(categoria);
    this.select$.next(this.categorias);
// de prueba 
   this.categoriaSelect=categoria;
   this.filtroBs.next(this.categoriaSelect);
   
    
  }
    get verCategorias(){
      return this.select$.asObservable();
    }

     get UltimaCategoriaSelect(){
     return this.filtroBs.asObservable();
  }

}
