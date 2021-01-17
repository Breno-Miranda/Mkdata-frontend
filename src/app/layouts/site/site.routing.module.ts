import { Routes } from '@angular/router';
import { ClientsComponent } from 'src/app/modules/clients/clients.component';

import { SiteComponent } from '../../modules/site/site.component';


export const SiteRoutes: Routes = [
  {path: '', component: SiteComponent},
  {path: 'clientes', component: ClientsComponent},
];


