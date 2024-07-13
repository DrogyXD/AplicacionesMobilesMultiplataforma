import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
 //declaración de variables y methodos
 //valor: boolean = true;

  valor = true;
  usuario ="Empleado";
  erestrabajador="";
  nacionalidad="";
  dia = "Lunes";
  fruta = "Uva";
  opcion = "";

  productos=[
    {codigo:1,nombre:"Gansitos", precio:20, descripcion:"Pastelisto de vainilla con envoltura echo de chocolate"},
    {codigo:2,nombre:"Doritos", precio:17, descripcion:"Frituras triangulares"},
    {codigo:3,nombre:"Coca cola 600ml", precio:18, descripcion:"Bebida azucarada sabor cola"},
    {codigo:4,nombre:"Carta blanca 970ml", precio:27, descripcion:"Bebida de cebada para tus fiestas"}
  ];

}
