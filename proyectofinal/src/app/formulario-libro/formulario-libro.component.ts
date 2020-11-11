import { Component, OnInit } from '@angular/core';

import { DatalibroService } from '../servicios/datalibro.service';
import { Router } from '@angular/router';

 

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {

  

  private titulo : string;
  private autor : string;
  private imageURL : string;
  private descripcion : string;

 
  constructor(private servicio : DatalibroService,private ruta: Router) {

    
   }

  ngOnInit() {
/*
    this.todoForm = this.formBuilder.group(
      title: ['', Validators.required]


    );*/
  }




  public guardar(){
    
    this.servicio.agregarLibro(this.titulo,this.autor,this.descripcion,this.imageURL);
    this.ruta.navigate(['libros'])
    
  }


}
