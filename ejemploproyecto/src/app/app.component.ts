import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ProductoComponent } from './producto/producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactoComponent,EncabezadoComponent,DirectivasComponent,ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemploproyecto';
}
