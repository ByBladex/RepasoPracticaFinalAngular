import { Entrada } from './../../clases/entrada';
import { ServicioService } from './../../service/servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-blogs',
  templateUrl: './lista-blogs.component.html',
  styleUrls: ['./lista-blogs.component.css']
})
export class ListaBlogsComponent implements OnInit {

  entradas: Entrada[]

  constructor(public servicio: ServicioService) {
    this.entradas = this.servicio.getEntradas();
   }

  ngOnInit(): void {
  }

}
