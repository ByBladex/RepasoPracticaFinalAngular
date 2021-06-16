import { LoginServiceService } from './../../service/login-service.service';
import { Entrada } from './../../clases/entrada';
import { ServicioService } from './../../service/servicio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css']
})
export class FormBlogComponent implements OnInit {

  formValidado: FormGroup

  constructor(private _builder: FormBuilder, public servicio: ServicioService, public loginservicio: LoginServiceService) {
    this.formValidado = this._builder.group({
      titulo: ['',Validators.required],
      contenido: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  insertarEntrada(){
    this.servicio.añadirEntrada(new Entrada(this.formValidado.controls.titulo.value, this.formValidado.controls.contenido.value, new Date()));
  }
}
