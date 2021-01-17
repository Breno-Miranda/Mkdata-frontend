import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/site/header/header.component';
import { FooterComponent } from './common/site/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
