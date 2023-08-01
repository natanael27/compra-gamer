import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { product } from 'src/app/product.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { FiltroCategoriasService } from 'src/app/services/filtro-categorias.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductsService } from 'src/app/services/products.service';
import { subcategoria } from 'src/app/subcategoria.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  filtro:boolean=true;

  imagen!:string;
  products:product[]=[];
  subcategorias:subcategoria[]=[];
  url_key:string='https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_'
  med:string='-med.jpg';
  img_completa:string='';

  carritoCont:number=0;
  prod!:product;
  private productBS: BehaviorSubject<product> = new BehaviorSubject<product>(this.prod);

  constructor(private prodService: ProductsService, private localstorService: LocalstorageService,
    private carritoService: CarritoService,private filtroCategoria: FiltroCategoriasService){
    this.get();
    this.getSubcategorias();
  }

  ngOnInit(): void {
    this.filtroCategoria.verCategorias.subscribe(resp=>{
      console.log('seselecciono cat:',resp);
      this.filtro=!this.filtro;
    })
    
  }

get(){  
  for (let i = 0; i < 37; i++) {
    this.prodService.getProduct().subscribe(r=>{
         this.products.push(r[i]);
         this.imagen=r[i].imagenes[0].nombre;
         this.img_completa=this.url_key+this.imagen+this.med
        // console.log(r[i],this.img_completa);
      });
  }
}

getSubcategorias(){
  for (let i = 0; i < 37; i++) {
  this.prodService.getSubcategorias().subscribe((r)=>{
      this.subcategorias.push(r[i]);
     // console.log(this.subcategorias[i]);
    })
  }
}

 filtrarSubcategoria() {
  for (let i = 0; i < this.products.length; i++) {
    if(this.products[i].id_subcategoria==this.subcategorias[i].id){
       this.subcategorias[i].nombre;
    }
    
  }
}

agregarProducto(prod : product){
  this.carritoCont++;
  this.carritoService.agregarProducto(prod);
  this.localstorService.set('producto',this.productBS)
}

vaciarCarrito(){
  this.carritoCont=0;
  this.carritoService.vaciarCarrito();
  
}



}
