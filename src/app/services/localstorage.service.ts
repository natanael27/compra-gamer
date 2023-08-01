import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set(key: string, data: any){
    try {
      localStorage.setItem(key,JSON.stringify(data));
    } catch (error) {
      console.log('error set LSS',error);
    }
   }
  
    get(key: string){
      try {
        return JSON.parse(localStorage.getItem(key) || '{}');
        // posible solucion al error en linea32
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}')
      } catch (e) {
        console.log('error get LSS',e);
      }
    }
  
    remove(key: string){
      try {
        
      } catch (error) {
        console.log('error remove LSS',error);
      }
    }
  
    clear(){
      try {
        localStorage.clear();
      } catch (e) {
        console.log('error clear LSS',e);
      }
    }
  
      update(key:string ,obj: any ){
        try {
          let getItm= localStorage.getItem(key);
          if(getItm){
            obj.next(JSON.parse(getItm));
          } 
        } catch (error) {
          console.log('error update lss', error);
        }
      }
}
