import { NgModule, Provider, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';
import { OtherComponent } from './other-module/other.component';

import { ViewsRoutingModule } from './views-routing.module';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [BrowserModule,HttpClientModule, FormsModule, ViewsRoutingModule,TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })],
  declarations: [AppComponent, TranslationComponent, OtherComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
