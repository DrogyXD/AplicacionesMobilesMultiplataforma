import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url ="http://localhost:3000/producto"
  constructor(private http: HttpClient) { }

  guardarProd(nombre:string,
    descripcion:string,
    existencia:string,
    precio:string,
    file:File){

    const fd = new FormData();
    fd.append("nombre", nombre);
    fd.append("descripcion",descripcion);
    fd.append("existencia",existencia);
    fd.append("precio",precio);
    fd.append("imagen", file);

    return this.http.post<any>(this.url,fd);
  }

  modificarProd(producto:object){
    return this.http.post<any>(this.url,producto);
  }

  modificarImagenProd(nombre:string,
    
    file:File){

    const fd = new FormData();
    fd.append("nombre", nombre);
    fd.append("imagen", file);

    return this.http.post<any>(this.url+"/imagen", fd);
  }
  
  eliminar(nombre:String){
    return this.http.delete<any>(this.url + "/borrar/" + nombre);
  }

  consultarProd(nombre:String){
    return this.http.get<any>(this.url + "/nombre/" + nombre);
  }

  consultarTodoProd(){
    return this.http.get<any>(this.url);
  }
}
