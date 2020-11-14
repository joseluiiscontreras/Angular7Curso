import { Component, OnInit } from '@angular/core';
import { DatalibroService } from '../../servicios/datalibro.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private datalibro:DatalibroService) { }

  // en on init devolvemos el arreglo de libros desde firebase! esto es provicional para prueba
  ngOnInit() {
    this.datalibro.getAllBooks().subscribe(books => {
      console.log("books:", books);
      
    });
  }

}
