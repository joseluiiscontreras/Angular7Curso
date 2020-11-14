import { Component, OnInit } from '@angular/core';

import { DatalibroService } from '../servicios/datalibro.service';
import { Router } from '@angular/router';
import { Libro } from '../servicios/Libro';


@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {

  

  public titulo : string;
  public autor : string;
  public imageURL : string;
  public descripcion : string;

 
  constructor(private servicio : DatalibroService,private ruta: Router) {

    
   }

  ngOnInit() {
/*
    this.todoForm = this.formBuilder.group(
      title: ['', Validators.required]


    );*/
  }




  public guardar(){
  

    let libro = { 
      nombre : this.titulo,
      autor: this.autor,
      imagen: this.imageURL,
      descripcion: this.descripcion
    }


    this.servicio.agregarLibro(libro);
    this.ruta.navigate(['libros']);
    
  }


}
