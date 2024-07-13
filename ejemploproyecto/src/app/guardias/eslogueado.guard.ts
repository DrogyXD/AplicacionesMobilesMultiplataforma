import { CanActivateFn, Router } from '@angular/router';
import { inject} from '@angular/core';
import { IniciosesionService } from '../servicios/iniciosesion.service';

export const eslogueadoGuard: CanActivateFn = (route, state) => {
  const inisesionService =inject(IniciosesionService);
  const router = inject(Router);

  if(inisesionService.eslogueado()){
    return true;
  }
  else{
    router.navigate(['/iniciosesion']);
    return false;
  }
  
};
