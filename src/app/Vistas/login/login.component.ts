import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';
import { Router } from "@angular/router";
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : Usuario;
  intentosDeIngreso : number;

  constructor(private _router: Router) { 
    this.user = new Usuario();
    this.intentosDeIngreso = 3;
  }

  ngOnInit(): void {
  }

  login(){
    if(this.validarUsuario()){
      this._router.navigate(['/home',this.user.username]);
    } else {
      this.intentosDeIngreso--;
      if(this.intentosDeIngreso == 0){
        this._router.navigateByUrl('/error');
      }
    }
    this.resetearParametros();
  }

  validarUsuario(){
    return this.user.username === 'acoria' && this.user.password === 'password';
  }

  resetearParametros(){
    this.user.password = undefined;
    this.user.username = undefined;
  }
}
