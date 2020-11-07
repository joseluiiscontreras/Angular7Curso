import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MybodyComponent } from './components/mybody/mybody.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioDeSesionComponent } from './components/inicio-de-sesion/inicio-de-sesion.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';

const routes: Routes = [

{ path: '', component: MybodyComponent},
{ path: 'login', component: InicioDeSesionComponent},
{path:'login/registro', component: RegistroComponent},
{path:'add', component: FormularioLibroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
