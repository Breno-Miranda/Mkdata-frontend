import { Routes } from '@angular/router';

// home
import { SiteComponent } from '../../modules/site/site.component';

// outher page
import { AddEditComponent } from 'src/app/modules/clients/add-edit/add-edit.component';
import { ClientsComponent } from 'src/app/modules/clients/clients.component';


export const SiteRoutes: Routes = [
  {path: '', component: SiteComponent},
  {path: 'clientes', component: ClientsComponent},
  {path: 'clientes/adicionar', component: AddEditComponent},
  {path: 'clientes/editar/:id', component: AddEditComponent},
];


