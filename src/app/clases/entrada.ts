export class Entrada {
    titulo: string;
    contenido: string;
    fechaCreacion: Date;

    constructor(titulo: string, contenido: string, fechaCreacion: Date){
        this.titulo=titulo;
        this.contenido=contenido;
        this.fechaCreacion=fechaCreacion;
    }
}
