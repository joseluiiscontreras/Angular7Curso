import { Injectable } from '@angular/core';
import { Libro } from './Libro';



@Injectable({
  providedIn: 'root'
})
export class DatalibroService {



  public lista_de_libros : Libro[] = [
    new Libro("A DANCE WITH DRAGONS","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus.","https://media.npr.org/assets/img/2011/07/06/dragons_custom-22fe9239df021369ad6e115282dfc9a23fbc7466-s800-c85.jpeg"),
    new Libro("THE WINDS OF WINTER","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus.","https://nerdist.com/wp-content/uploads/2020/07/the-Winds-of-Winter-cover.jpg"),
    new Libro("A DANCE WITH DRAGONS","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus..","https://cnet3.cbsistatic.com/img/O6YGKQJOP59U9FUO0E8G5SPMLVo=/940x0/2018/04/25/a369218a-fd60-440f-a786-78f545f2736f/fireandblood.jpg"),
    new Libro("A DANCE WITH DRAGONS","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus..","https://cdn.waterstones.com/bookjackets/large/9780/0074/9780007447831.jpg"),
    new Libro("THE WINDS OF WINTER","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus..","https://m.media-amazon.com/images/I/519Nw0Uw+jL.jpg"),
    new Libro("A DANCE WITH DRAGONS","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus..","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1354567206l/147915.jpg"),
    new Libro("A DANCE WITH DRAGONS","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus..","https://www.pulsiondigital.com/wp-content/uploads/2019/11/Robert-Kiyosaki-Padre-rico-padre-pobre.jpg"),
    new Libro("THE WINDS OF WINTER","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus..","https://descubierta.es/wp-content/uploads/2019/03/portada-libro-ilustrada-asuntoshonor.jpg"),
    new Libro("A DANCE WITH DRAGONS","George R. Martin","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit quia minima accusamus ipsum, omnis sunt vero alias possimus aperiam! Asperiores expedita unde eveniet maxime, veritatis assumenda alias reiciendis doloribus..","https://static.megustaleer.com.ar/images/libros_650_x/EGR51716.jpg"),
  ];

  



  constructor() {

    console.log("el servicio funciona!");

   }




  public agregarLibro(nombre:string,autor:string,descripcion:string,imagen:string){

    let libro = new Libro(nombre,autor,descripcion,imagen);
      this.lista_de_libros.push(libro);
  }


  
  public listaLibro(){
    return this.lista_de_libros;
  }


}
