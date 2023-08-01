import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compra-gamer';
  mostrar=true;

  constructor(private router:Router){}

  signUp(){
    setTimeout(() => {
 
      this.router.navigate(['signup']);
      this.mostrar=!this.mostrar;
    }, 500);
    
  }
  logIn(){
    setTimeout(() => {
 
      this.router.navigate(['login']);
    }, 500);
    
  }
  logOut(){
    setTimeout(() => {
 
      this.router.navigate(['home']);
    }, 500);
   
  }

}
