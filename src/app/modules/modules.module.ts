import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { SiteComponent } from './site/site.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientsModule } from './clients/clients.module';



@NgModule({
  declarations: [
    SiteComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ClientsModule
  ]
})
export class ModulesModule { }
