import { Component, OnInit } from '@angular/core';

import { DatalibroService } from '../servicios/datalibro.service';
import { Router,ActivatedRoute } from '@angular/router';
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

 public id:string; // provicional
  public libro:Libro = null;

  public bandera: boolean=false; 

  constructor(private servicio : DatalibroService,private ruta: Router, private activada: ActivatedRoute) {

    
   }

  ngOnInit() {
/*
    this.todoForm = this.formBuilder.group(
      title: ['', Validators.required]


    );*/

    this.autoCompletarCampos();
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


  public actualizar(){

    let libro = { 
      nombre : this.titulo,
      autor: this.autor,
      imagen: this.imageURL,
      descripcion: this.descripcion,
      id : this.id
    }

    this.servicio.actualizarLibro(libro);
    this.ruta.navigate(['libros']);

  }


  public autoCompletarCampos(){

    this.id = this.activada.snapshot.paramMap.get('id'); // obtenemos el parametro de libro/edit/:id
    console.log("el valor de id es : " , this.id);
                           //obtenemos un libro por su id 
    this.servicio.obtenerUnLibro(this.id).subscribe( libro => {

      if(libro != null){
      this.titulo = libro.nombre;
      this.imageURL = libro.imagen;
      this.descripcion = libro.descripcion;
      this.autor = libro.autor;
      this.bandera=true;
      }

    }

      ); 

  }




}
