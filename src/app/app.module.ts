import { NgModule, Provider, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';
import { OtherComponent } from './other-module/other.component'

import { ViewsRoutingModule } from './views-routing.module';


@NgModule({
  imports: [BrowserModule, FormsModule, ViewsRoutingModule],
  declarations: [AppComponent, TranslationComponent, OtherComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
