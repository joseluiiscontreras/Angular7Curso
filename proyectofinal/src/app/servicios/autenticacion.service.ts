import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {  auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private angularFireAuth: AngularFireAuth) { }


  // comprobamos si el usuario esta logeado
  estaAutenticado(){
    return this.angularFireAuth.authState.pipe(map(auth => auth ));

  }



    //metodo para logiarse por google. 
    // utilizamos return para que devuelva el observable y usando promesas esperemos a que devuelva la informacion donde llamemos onLoginGoogle()
    onLoginGoogle() {
      return this.angularFireAuth.auth.signInWithPopup( new auth.GoogleAuthProvider());
     // this.ruta.navigate(['libros']);
    }


    //metodo para loguearnos con usuario y contrasena
    onLoginUserPassword(email:string,password:string){

     return new Promise((resolve,reject) => { 
       
        this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)

        .then(datosUsuario => resolve(datosUsuario),
         error => reject(error));

      });
     
    }



  // nos deslogeamos. 
  LogOut() {

    return  this.angularFireAuth.auth.signOut();
  }




  registrerUser(user:string, pass:string){
   // this.angularFireAuth.auth.si

  return  new Promise((resolve,reject) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(user,pass)
        .then(datosUsuario => resolve(datosUsuario),error => reject(error)) 
   });
  }


}
