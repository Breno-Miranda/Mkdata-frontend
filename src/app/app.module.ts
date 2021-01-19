import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SiteComponent } from './layouts/site/site.component';
import { AppRoutingModule } from './app-routing.module';


import { JwtInterceptor } from './core/authentication/jwt.interceptor';
import { ErrorInterceptor } from './core/http/error.interceptor';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
 

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    SharedModule,
    NgxMaskModule.forRoot(maskConfig),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
