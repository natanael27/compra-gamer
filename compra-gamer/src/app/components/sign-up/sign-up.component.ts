import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form :FormGroup;
loading:boolean=false;

constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar,private router: Router ){
  this.form=this.formBuilder.group({
    nombre:['',Validators.required],
    apellido:['',Validators.required],
    dni:['',Validators.required],
    telefono:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  })
}

ingresar(){
  const nombre= this.form.value.nombre;
  const apellido= this.form.value.apellido;
  const dni= this.form.value.dni;
  const telefono= this.form.value.telefono;
  const email= this.form.value.email;
  const password= this.form.value.password;

  if( this.form.valid ){
      //redirecciono a home
      this.fakeLoading();
  }else{
    //error
    this.error();
    this.form.reset();
  }
}

error(){
  this._snackBar.open('datos no ingresados','',{
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
