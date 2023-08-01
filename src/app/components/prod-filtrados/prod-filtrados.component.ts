import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { product } from 'src/app/product.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { FiltroCategoriasService } from 'src/app/services/filtro-categorias.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductsService } from 'src/app/services/products.service';
import { subcategoria } from 'src/app/subcategoria.model';

@Component({
  selector: 'app-prod-filtrados',
  templateUrl: './prod-filtrados.component.html',
  styleUrls: ['./prod-filtrados.component.css']
})
export class ProdFiltradosComponent {
  
  categorias:subcategoria[]=[];

  listaNueva:any[]=[];
  listaAgrupados:any[]=[];

  imagen!:string;
  products:product[]=[];
  subcategorias:subcategoria[]=[];
  url_key:string='https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_'
  med:string='-med.jpg';
  img_completa:string='';

  carrito:number=0;
  prod!:product;
  private productBS: BehaviorSubject<product> = new BehaviorSubject<product>(this.prod);

  constructor(private prodService: ProductsService, private localstorService: LocalstorageService,
    private carritoService: CarritoService,private filtroCategSvc: FiltroCategoriasService, private roter: Router){
    this.get();
    this.getSubcategorias();
  }

  ngOnInit(): void {
  //this.selectCategoria();
   this.pruebaFiltrar();
   
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

agregarProducto(prod : product){
  this.carrito++;
  this.carritoService.agregarProducto(prod);
  this.localstorService.set('producto',this.productBS)
}

verListaAgregados(){
  console.log('producto agregado');
}

 /*
 selectCategoria(){
  this.pruebaFiltrar();
  this.filtroCategSvc.verCategorias.subscribe(resp=>{
    console.log('filtro-cat:',resp)
    for (const iterator of resp) {
      let prodFiltrados = this.listaNueva.filter(cat => cat.nombre_cat === 'Mouses')
      this.listaAgrupados.push(prodFiltrados);
      console.log('prod_filtrados',prodFiltrados,'list agroup',this.listaAgrupados);
    }
   
  })
}
*/

pruebaFiltrar(){
  this.prodService.getProduct().subscribe(resp=>
    { for (const prod of resp) {
      this.filtroCategSvc.verCategorias.subscribe(r=>{
        for (const catf of r) {
          if(prod.id_subcategoria===catf.id){
              let nuevoObj={
                id_Cat:catf.id,
                nombre_cat:catf.nombre,
                nombre:prod.nombre,
                precio:prod.precio,
                imagen:this.url_key+prod.imagenes[0].nombre+this.med
              }
              this.listaNueva.push(nuevoObj);
              console.log('nuevo obj:', nuevoObj)
              //console.log('prod.imagenes[0]') 
              //prueba
              for (const iterator of r) {
                let prodFiltrados = this.listaNueva.filter(cat => cat.nombre_cat === iterator.nombre)
                this.listaAgrupados.push(prodFiltrados);
                console.log('prod_filtrados',prodFiltrados,'list agroup',this.listaAgrupados);
              }
          }
        }
      })
    }
    })
 }


volverAtras(){
this.roter.navigate(['home']);
}

}
