import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AddComponent } from './add/add.component';
import { ClientsComponent } from './clients.component';


import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AddComponent, ClientsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class ClientsModule { }
