import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';   
import { InicioComponent } from '../inicio/inicio.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { DirectivasComponent } from '../directivas/directivas.component';
import { RouterModule } from '@angular/router';
import { IniciosesionComponent } from '../iniciosesion/iniciosesion.component';
import { IniciosesionService } from '../servicios/iniciosesion.service';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  InicioComponent,
  ContactoComponent,
  EmpleadoComponent,
  DirectivasComponent,
  ProductoComponent,
  RouterModule,
  CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(public  inisesionService: IniciosesionService){}

}
