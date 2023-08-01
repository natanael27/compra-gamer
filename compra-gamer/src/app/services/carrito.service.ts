import { Injectable } from '@angular/core';
import { product } from '../product.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito:product[]=[];
  
  productosB$:BehaviorSubject<product[]>;

  constructor() { 
    this.productosB$=new BehaviorSubject<product[]>([]);
  }

  agregarProducto(producto: product){
    this.carrito.push(producto);
    this.productosB$.next(this.carrito);
  }

  get ProductosList() {
    return this.productosB$.asObservable();
  }

  vaciarCarrito(){
    this.carrito=[];
    this.productosB$.next(this.carrito);
  }
}
