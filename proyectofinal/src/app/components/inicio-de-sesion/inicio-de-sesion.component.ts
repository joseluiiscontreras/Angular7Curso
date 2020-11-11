import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import {  auth } from 'firebase/app';
import { Router, RouterModule } from '@angular/router';
import { AutenticacionService } from '../../servicios/autenticacion.service';


@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private autenticar : AutenticacionService ,  private ruta : Router) { }

  public user:string;
  public pass:string; 

  ngOnInit() {
  }



    //metodo para logiarse por google.
  iniciarSesionPorGoogle(){

    
      this.autenticar.onLoginGoogle().then((res) => {

       this.loginRedirect();

      }).catch(err => console.log('err', err));
    
  }


  //metodo para logearse por usuario y contrasena
  iniciarSesionUsuarioContrasena(){
    console.log('usuario:' , this.user + ' pass: ', this.pass );

    this.autenticar.onLoginUserPassword(this.user,this.pass).then((res) => {

      this.loginRedirect();

    }).catch(error => console.log("error", error));

    
  }

  // metodo que redirecciona al logearse
  loginRedirect(){
    this.ruta.navigate(['libros']);
  }


  

}

