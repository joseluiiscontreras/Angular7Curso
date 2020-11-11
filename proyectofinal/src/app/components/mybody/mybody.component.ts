import { Component, Input, OnInit } from '@angular/core';


import { DatalibroService } from '../../servicios/datalibro.service';
import { Libro } from '../../servicios/Libro';
import { AutenticacionService } from '../../servicios/autenticacion.service';


@Component({
  selector: 'app-mybody',
  templateUrl: './mybody.component.html',
  styleUrls: ['./mybody.component.css']
})
export class MybodyComponent implements OnInit {


  public alfabeto : string[] = ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   



  public  lista_de_libros  : Libro[];

  public estaLogueado : boolean = false;

  constructor( servicio : DatalibroService, private auth: AutenticacionService ) { 

    // servicio de donde se obtienen el arreglo de objetos tipo Libro
    this.lista_de_libros=servicio.listaLibro();

  }

  ngOnInit() {


    this.estadoUsuarioActual();

  }



  estadoUsuarioActual(){
    this.auth.estaAutenticado().subscribe(resultado => {

        if (resultado){this.estaLogueado=true}else{this.estaLogueado=false}});

  }
  






  


}
