import { ServicioService } from './../../service/servicio.service';
import { Entrada } from './../../clases/entrada';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input('entrada') entrada!: Entrada;

  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
  }

  eliminarEntrada(entrada: Entrada){
    this.servicio.eliminarEntrada(entrada);
  }
}
