import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FiltroCategoriasService } from 'src/app/services/filtro-categorias.service';
import { ProductsService } from 'src/app/services/products.service';
import { subcategoria } from 'src/app/subcategoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  categorias:subcategoria[]=[];

  listaNueva:any[]=[];
  listaAgrupados:any[]=[];
 

  constructor(private prodService: ProductsService,private router: Router,
    private filtroCategSvc: FiltroCategoriasService){
  }

  ngOnInit(): void {
    this.prodService.getSubcategorias().subscribe(resp=>{
      console.log('subcategorias',resp);
      this.categorias=resp;
    });
   // this.pruebaFiltrar();
  }

  selectCategoria(categoria:subcategoria){
    this.filtroCategSvc.selectCategoria(categoria);
    console.log('se seleccionó la categoria',categoria);

    /*
    let prodFiltrados = this.listaNueva.filter(cat => cat.nombre_cat === categoria.nombre)
    this.listaAgrupados.push(prodFiltrados);
    console.log('prod_filtrados',prodFiltrados);
*/
  }
/*
  pruebaFiltrar(){
    this.prodService.getProduct().subscribe(resp=>
      { for (const prod of resp) {
        this.filtroCategSvc.verCategorias.subscribe(r=>{
          for (const catf of r) {
            if(prod.id_subcategoria===catf.id){
                let nuevoObj={
                  id_Cat:catf.id,
                  nombre_cat:catf.nombre,
                  nombre_prod:prod.nombre,
                  precio_pro:prod.precio,
                }
                this.listaNueva.push(nuevoObj);
                console.log('nuevo obj:', nuevoObj) 
            }
          }
        })
      }
      })
   }

  
*/

}
