import { Component } from '@angular/core';
import { IniciosesionService } from '../servicios/iniciosesion.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css'
})
export class IniciosesionComponent {
  usuario={
    usuario:"",
    password: ""
  }
 
  constructor(private iniciosesionServicio: IniciosesionService, private router:Router){}

  iniSesion(){
    //this.iniciosesionServicio.inicioS(this.usu, this.pass);
    this.iniciosesionServicio.login(this.usuario).subscribe(
      res=>{
        alert(res.usu_enviado.msj);
        this.router.navigate(["/inicio"]);
        localStorage.setItem("usuario",res.usu_enviado.email);
        //console.log(res);
      },
      err=>{
        if (typeof err.error === "string" && err.error.length === 0){
          alert(err);
        }
        else {
          alert(err.error.errores[0].msg);
        }
        console.log(err);
      }
    );
  }

}
