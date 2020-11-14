import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyheaderComponent } from './components/myheader/myheader.component';
import { MybodyComponent } from './components/mybody/mybody.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioDeSesionComponent } from './components/inicio-de-sesion/inicio-de-sesion.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';



import { DatalibroService } from './servicios/datalibro.service';
import { AutenticacionService } from './servicios/autenticacion.service';


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibrodetallesComponent } from './components/librodetalles/librodetalles.component';




@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    MybodyComponent,
    RegistroComponent,
    InicioDeSesionComponent,
    FormularioLibroComponent,
    HomepageComponent,
    FooterComponent,
    LibrodetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFontAwesomeModule
    

  ],
  providers: [AngularFireAuth,AngularFirestore, DatalibroService, AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
