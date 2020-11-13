import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import {  AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  // boolean que usamos para desaparecer o aparecer elementos en caso de que este o no logueado
  public estaLogueado : boolean = false;
  public foto : string = ""; 
  public displayname : string = "";
  public tieneFoto : boolean=false;
  constructor(private auth : AutenticacionService, private angularFireAuth : AngularFireAuth, private ruta: Router ) { }

  

  ngOnInit() {
    this.usuarioActual();

  }

  // metodo que comprueba si estamos logeados.
  usuarioActual(){

    // estaAutenticado devuelve un observable al cual nos sucribimos
    // dependiendo de su resultado indicamos si estamos logeados o no. 
   this.auth.estaAutenticado().subscribe(resultado => {

    if(resultado){ 
      console.log("estamos logeado!!");
      console.log(resultado);
      this.foto=resultado.photoURL;
      console.log("foto: " + this.foto);
      this.displayname=resultado.displayName;
        if(resultado.displayName===null){this.displayname=resultado.email} // si el nombre es null, que le ponga el email  de displayname
        if(resultado.photoURL===null){ // si no tiene foto que aparesca un icono
          this.tieneFoto=true; // bandera usada para aparecer o no el icono de usuario, si es true aparece el icono
        }

      this.estaLogueado = true;
    }else {
      console.log("no estamos logeados");
      this.estaLogueado = false;
      this.tieneFoto=false; // desaparecemos el icono de usuario
    }} ); 



  }


  cerrarSesion(){
      //al terminar de cerrar session nos redirige a la direccion ' ' , en caso de un error lo imprimimos en consola. 
   return  this.auth.LogOut().then((res) => {
      this.ruta.navigate(['']);
    }).catch(err => {console.log("error: ", err)});

  }


}
