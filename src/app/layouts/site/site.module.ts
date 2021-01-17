import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModulesModule } from 'src/app/modules/modules.module';

import { SiteRoutes } from './site.routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(SiteRoutes),
    NgbModule,
    ModulesModule,
    FormsModule,
  ]
})
export class SiteModule { }
