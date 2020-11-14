import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatalibroService } from '../../servicios/datalibro.service';
import { Libro } from '../../servicios/Libro';


@Component({
  selector: 'app-librodetalles',
  templateUrl: './librodetalles.component.html',
  styleUrls: ['./librodetalles.component.css']
})
export class LibrodetallesComponent implements OnInit {
  private id : string = "";
  public libro : Libro;

  constructor(private ruta : Router, private activada: ActivatedRoute, private datalibroservice:DatalibroService) { }

  ngOnInit() {
    
    this.detallesLibro();

  }


  detallesLibro(){

    this.id = this.activada.snapshot.paramMap.get('id'); // obtenemos el parametro de libro/:id
    console.log("el valor de id es : " , this.id);
                           //obtenemos un libro por su id 
    this.datalibroservice.obtenerUnLibro(this.id).subscribe( libro =>
       
        this.libro = libro 
      );

  }


  borrarLibro(): void{
    this.datalibroservice.borrarLibro(this.id);
    this.ruta.navigate(['libros'])
  }

}
