import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { SiteComponent } from './site/site.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsModule } from './clients/clients.module';



import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MomentModule } from 'ngx-moment';

const maskConfig: Partial<IConfig> = {
  validation: true,
};



@NgModule({
  declarations: [
    SiteComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ClientsModule,
    NgxMaskModule.forRoot(maskConfig),
    MomentModule
  ]
})
export class ModulesModule { }
