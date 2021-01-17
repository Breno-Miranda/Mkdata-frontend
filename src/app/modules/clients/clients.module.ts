import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ClientsComponent } from './clients.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DelComponent } from './del/del.component';



@NgModule({
  declarations: [
    ClientsComponent,
    AddEditComponent,
    DelComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class ClientsModule { }
