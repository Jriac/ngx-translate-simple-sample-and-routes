import { NgModule, Provider, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';
import { OtherComponent } from './other-module/other.component';
import {TranslateModule} from '@ngx-translate/core';
import { ViewsRoutingModule } from './views-routing.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  imports: [BrowserModule, FormsModule, ViewsRoutingModule,TranslateModule.forRoot({
            loader: {
                provide: TranslateHttpLoader,
                useFactory: HttpClient,
                deps: [HttpClient]
            }
        })],
  declarations: [AppComponent, TranslationComponent, OtherComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
