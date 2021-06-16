import { LoginServiceService } from './../../service/login-service.service';
import { ServicioService } from './../../service/servicio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formValidado: FormGroup

  constructor(private _builder: FormBuilder, private router: Router, public servicio: ServicioService, private serviciologin: LoginServiceService) {
    this.formValidado = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ngOnInit(): void {
  }

  login(value:any):void{
    console.log(value);
    if(value.email==="prueba@gmail.com" && value.password==="123456"){
      this.serviciologin.login();
      this.router.navigateByUrl('/blog');
    }
  }
}
