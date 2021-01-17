import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './common/site/header/header.component';
import { FooterComponent } from './common/site/footer/footer.component';



@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
