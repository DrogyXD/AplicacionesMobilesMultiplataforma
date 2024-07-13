import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, FormsModule, FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {

  ngOnInit() {
    this.consultarTodosProd();
  }

  file: any;

  productos: any;

  producto = {
    nombre: "",
    descripcion: "",
    existencia: "",
    precio: ""

  }

  constructor(private ServicioProd: ProductoService, private router: Router) { }

  crearProducto() {
    this.router.navigate(['/crearProducto']);
  }

  guardarProd() { }

  modificarProd() { }

  modificarImgProd() { }

  consultarProd() { }

  eliminarProd(nombre: string) {
    if (confirm("¿Desea eliminar el producto" + nombre + "?")) {
      this.ServicioProd.eliminar(nombre).subscribe(
        res => {
          alert("Producto Eliminada");
          this.consultarTodosProd();
        }, err => {
          alert("Error al eliminar");
        });
    }
  }

  consultarTodosProd() {
    this.productos = this.ServicioProd.consultarTodoProd();
  }

  desplegarModal() {
    const modalElement = document.getElementById('editModal');
    if (modalElement) {
      modalElement.style.display = 'block';
    }
  }

  cerrarModal() {
    const modalElement = document.getElementById('editModal');
    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }
}
