import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../product.model';

import { BehaviorSubject, Observable, map } from 'rxjs';
import { subcategoria } from '../subcategoria.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url_subcategorias='https://static.compragamer.com/test/subcategorias.json'
  url_productos='https://static.compragamer.com/test/productos.json';

  tamanio:string='-med.jpg';

  prod!:product;
  //private productBS: BehaviorSubject<product[]> = new BehaviorSubject<product[]>([]);
  
  constructor(private http: HttpClient) { }

  getProduct():Observable<product[]>{
      return this.http.get<product[]>(this.url_productos);
      
  }

  getSubcategorias():Observable<subcategoria[]>{
      return this.http.get<subcategoria[]>(this.url_subcategorias);
    }    




  /*
  getProductFilter(){
    return this.http.get(this.url_productos).pipe(map((resp:any)=>({
      nombre:resp.nombre,
     // imagen:resp.imagenes[0].nombre,
      precio:resp.precio
    })))
  }*/
  
}
