import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombre : String = "Jose Luis Contreras";
  public bio : string = "Desarollador Web"
  
  
  constructor() { 

 
  }

 

  ngOnInit() {


  }

}
