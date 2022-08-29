import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { ErrorComponent } from './Vistas/error/error.component';
import { LoginComponent } from './Vistas/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home/:username',
    component:BienvenidoComponent
  },
  {
    path:'error',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
