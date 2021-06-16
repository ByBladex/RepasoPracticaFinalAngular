import { Entrada } from './../clases/entrada';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  estilo: boolean
  entradas: Entrada[]

  constructor() {
    this.entradas = [
      new Entrada("Primera entrada","Esta es la primera entrada del blog",new Date())
    ];
    this.estilo=false;
   }

  cambiarEstilo(){
    this.estilo = !this.estilo;
  }

  getEstilo(){
    return this.estilo;
  }

  getEntradas(){
    return this.entradas;
  }

  añadirEntrada(data: Entrada){
    this.entradas.push(data);
    console.log("["+data.titulo+","+data.contenido+","+data.fechaCreacion+"] añadida al blog");
  }

  eliminarEntrada(data: Entrada){
    const ind: number = this.entradas.indexOf(data);
    if (ind !== -1) {
        this.entradas.splice(ind, 1);
    }
  }
}
