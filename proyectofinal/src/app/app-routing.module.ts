import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MybodyComponent } from './components/mybody/mybody.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioDeSesionComponent } from './components/inicio-de-sesion/inicio-de-sesion.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { HomepageComponent } from '../app//components/homepage/homepage.component';
import { LibrodetallesComponent } from './components/librodetalles/librodetalles.component';



const routes: Routes = [

{path: 'home', component: HomepageComponent},
{ path: 'login', component: InicioDeSesionComponent},
{path:'login/registro', component: RegistroComponent},
{path:'libros/add', component: FormularioLibroComponent},
{path:'libros/edit/:id', component: FormularioLibroComponent},
{path: 'libros', component: MybodyComponent},
{path: 'libros/:id', component: LibrodetallesComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
