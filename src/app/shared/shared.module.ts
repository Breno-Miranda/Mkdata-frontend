import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './common/site/header/header.component';
import { FooterComponent } from './common/site/footer/footer.component';
import { ClientsTableComponent } from './module/clients-table/clients-table.component';



@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    ClientsTableComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ClientsTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
