import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  constructor(private servicioProd: ProductoService, private router: Router) { }

  file: any

  producto = {
    nombre: "",
    descripcion: "",
    existencia: "",
    precio: ""
  }

  fotoseleccionada(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
    }
  }

  guardarProd() {
    this.servicioProd.guardarProd(this.producto.nombre,
      this.producto.descripcion,
      this.producto.existencia,
      this.producto.precio,
      this.file
    ).subscribe(
      res => {
        alert("Registro guardado");
        this.router.navigate(['/producto'])
      },
      err => {

      }
    );
  }

  productos(){
    this.router.navigate(['/producto'])
  }
}
