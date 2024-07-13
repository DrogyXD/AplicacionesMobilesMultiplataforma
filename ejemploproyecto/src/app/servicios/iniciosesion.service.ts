import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {

  //el uso de url es para cuando ya estemos usando la base de datos
  private url ="http://localhost:3000/usuarios/iniciosesion";

  constructor(private router:Router,private http: HttpClient){}

  login(usuario: object){
    return this.http.post<any>(this.url,usuario)
  }


  inicioS(usu: string, pass:string){
    if(usu== "Brandon" && pass =="0902"){
      alert("Bienvenido");
      this.router.navigate(["/inicio"]);
      localStorage.setItem("usuario",usu);
    }
    else
      alert("Usuario y contraseña incorrectos");
    }//ciiere de inicioS

    eslogueado():boolean{
      if(localStorage.getItem("usuario")==null){
        return false;
      }else{
        return true;
      }
    }//cierre de es logueado

    cerrarSesion(){
      //Elimina una sola variable del local storage
      //localStorage.removeItem("usuario");

      //elimina todos
      localStorage.clear();
      this.router.navigate(['/iniciosesion']);

    }
}
