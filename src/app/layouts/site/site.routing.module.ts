import { Routes } from '@angular/router';
import { AddComponent } from 'src/app/modules/clients/add/add.component';
import { ClientsComponent } from 'src/app/modules/clients/clients.component';

import { SiteComponent } from '../../modules/site/site.component';


export const SiteRoutes: Routes = [
  {path: '', component: SiteComponent},
  {path: 'clientes', component: ClientsComponent},
  {path: 'clientes/adicionar', component: AddComponent},
];


