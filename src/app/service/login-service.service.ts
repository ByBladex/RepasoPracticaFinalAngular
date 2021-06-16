import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  logueado: boolean = false;

  constructor(private router: Router) { }

  desloguear(){
    this.logueado = false;
    this.router.navigateByUrl('/login');
  }

  login(){
    this.logueado = true; 
  }
}
