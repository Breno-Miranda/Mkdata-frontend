import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './common/site/header/header.component';
import { FooterComponent } from './common/site/footer/footer.component';
import { ClientsTableComponent } from './module/clients-table/clients-table.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MomentModule } from 'ngx-moment';

const maskConfig: Partial<IConfig> = {
  validation: true,
};


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
    NgxMaskModule.forRoot(maskConfig),
    MomentModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
