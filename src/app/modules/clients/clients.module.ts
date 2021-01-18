import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsComponent } from './clients.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditComponent } from './add-edit/add-edit.component';


import { NgxMaskModule, IConfig } from 'ngx-mask'
 
const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [
    ClientsComponent,
    AddEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ]
})


export class ClientsModule { }
