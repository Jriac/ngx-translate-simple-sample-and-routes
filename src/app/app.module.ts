import { NgModule, Provider,Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslationComponent } from './translation.component';
import { I18nService, I18nServiceConfig } from 'ng2-i18next/ng2-i18next';

import * as i18nextXHRBackend from 'i18next-xhr-backend';
import * as i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import {I18nDirective} from 'ng2-i18next/ng2-i18next';


const NG2_I18NEXT_PROVIDERS = [{ provide: I18nServiceConfig, useValue: { use: [i18nextBrowserLanguageDetector, i18nextXHRBackend], config: { detection: { order: ['navigator'] }, fallbackLng: 'en' } } }, I18nService]

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TranslationComponent],
  bootstrap: [AppComponent],
  providers: [NG2_I18NEXT_PROVIDERS,I18nDirective]
})
export class AppModule { }
