export class Libro {

    private nombre:string;
    private autor:string;
    private descripcion:string;
    private imagen:string;

    
    constructor(nombre:string, autor:string, descripcion:string, imagen:string){
        this.nombre=nombre;
        this.autor=autor;
        this.descripcion=descripcion;
        this.imagen=imagen;

       
    }



    /**
     * getter and setter
     */
    public setNombre(nombre:string) {
        this.nombre=nombre;
    }

    public getNombre() {
        return this.nombre;
    }

    public setAutor(autor:string) {
        this.autor=autor;
    }

    public getAutor(): string{
        return this.autor;
    }

    public setDescripcion(descripcion:string){
        this.descripcion=descripcion;
    }

    public getDescripcion(){
       return this.descripcion;
    }

    public setImagen(imagen:string){
        this.imagen=imagen;
    }

    public getImagen(){
        return this.imagen;
    }

}
