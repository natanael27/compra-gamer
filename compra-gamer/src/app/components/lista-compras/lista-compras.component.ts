import { Component } from '@angular/core';
import { product } from 'src/app/product.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {

  mostrarLista:boolean=false;
  productos:product[]=[];

    constructor(private localStorService: LocalstorageService,private carritoSvc: CarritoService){
    }

    ngOnInit(): void {
      this.carritoSvc.ProductosList.subscribe((resp:any) => {
        this.productos=resp
        console.log('lista de compras',resp);
      });
      
    }


}
