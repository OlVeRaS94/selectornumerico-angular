import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectornumericoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
title='selectorNumerico'

@ViewChild('selector1') selector1: any;
@ViewChild('selector2') selector2: any;

fijarSelector1(valor:number){
  this.selector1.fijar(valor);
}

fijarSelector2(valor:number){
  this.selector2.fijar(valor);
}

}
