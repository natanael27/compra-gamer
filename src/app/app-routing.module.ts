import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',component:HomeComponent},
  {path:'lista',component:ListaComprasComponent},

  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
