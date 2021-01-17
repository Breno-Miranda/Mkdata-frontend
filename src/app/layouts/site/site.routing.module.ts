import { Routes } from '@angular/router';
import { SiteComponent } from '../../modules/site/site.component';
import { VehiclesComponent } from 'src/app/modules/vehicles/vehicles.component';


export const SiteRoutes: Routes = [
  {path: '', component: SiteComponent},
  {path: 'zerokm/detalhes/:p1/:p2/:p3/:p4/:p5/:p6', component: VehiclesComponent},
];


