import { Routes, mapToCanActivate } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { eslogueadoGuard } from './guardias/eslogueado.guard';
import { ProductoComponent } from './producto/producto.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

export const routes: Routes = [
    {path:"contacto", component: ContactoComponent},
    {path:"directivas", component: DirectivasComponent, canActivate:[eslogueadoGuard]},
    {path:"inicio", component: InicioComponent},
    {path:"empleado", component:EmpleadoComponent, canActivate:[eslogueadoGuard]},
    {path:"iniciosesion", component:IniciosesionComponent},
    {path: "producto", component:ProductoComponent},
    // {path: "productDetail", component:ProductDetailComponent},
    {path: "crearProducto", component:CrearProductoComponent}
];
