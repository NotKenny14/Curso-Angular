import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Configuracion del lcoale de la app
import localeEsMX from "@angular/common/locales/es-MX";

import { registerLocaleData } from "@angular/common";


registerLocaleData( localeEsMX )


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
