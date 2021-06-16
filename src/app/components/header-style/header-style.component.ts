import { ServicioService } from './../../service/servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-style',
  templateUrl: './header-style.component.html',
  styleUrls: ['./header-style.component.css']
})
export class HeaderStyleComponent implements OnInit {

  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
  }

  modoOscuro(){
    this.servicio.cambiarEstilo();
  }
}
