import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
form :FormGroup;
loading:boolean=false;

constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar,private router: Router ){
  this.form=this.formBuilder.group({
    usuario:['',Validators.required],
    password:['',Validators.required]
  })
}


ingresar(){
  const usuario= this.form.value.usuario;
  const password= this.form.value.password;

  if(usuario == 'papa' && password=='papa'){
      //redirecciono a dashboard
      this.fakeLoading();
  }else{
    //error
    this.error();
    this.form.reset();
  }
}

error(){
  this._snackBar.open('usuario o contraseña invalidos','',{
    duration:5000,
    horizontalPosition:'center',
    verticalPosition:'top'
  });
}

fakeLoading(){
this.loading=true;
setTimeout(() => {
 
  this.router.navigate(['home']);
}, 2000);
}
}
