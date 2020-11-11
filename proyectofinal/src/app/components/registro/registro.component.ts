import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  public user: string;
  public pass: string;
  constructor(private autenticar : AutenticacionService, private ruta : Router) { }

  ngOnInit() {

  }




  //metodo para registrarse por usuario y contrasenia
  registrarPorUsuarioContrasena(){
    console.log('usuario:' , this.user + ' pass: ', this.pass );

    this.autenticar.registrerUser(this.user,this.pass).then((res) => {

              this.autenticar.LogOut().then(resp => {}).catch(err => console.log("error al desloguearse: ", err))
              this.ruta.navigate(['#']);

              this.ruta.navigate(['login']);

    }).catch(error => console.log("error", error));

    
  }





    //metodo para registrarse/loguearse por google.
    iniciarSesionPorGoogle(){

    
      this.autenticar.onLoginGoogle().then((res) => {

        this.ruta.navigate(['libros']);

      }).catch(err => console.log('err', err));

    
  }

  


}
