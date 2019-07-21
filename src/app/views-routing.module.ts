import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OtherComponent} from './other-module/other.component'
import { TranslationComponent } from './translation/translation.component';
import {LocalizeRouterModule,LocalizeRouterSettings,LocalizeParser,ManualParserLoader} from 'localize-router';
import {LocalizeRouterHttpLoader} from 'localize-router-http-loader';
import {TranslateService} from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

//we have 2 ways to manual load router localization config
/*
LocalizeRouterModule.forRoot(routes, {
    parser: {
        provide: LocalizeParser,
        useFactory: (translate, location, settings) =>
            new ManualParserLoader(translate, location, settings, ['en','de',...], 'YOUR_PREFIX'),
        deps: [TranslateService, Location, LocalizeRouterSettings]
    }
})
*/

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, settings, http);
}

const routes: Routes = [
  { path: 'landing', component: TranslationComponent, data: { header: false, footer: true } },
  { path: 'other', component: OtherComponent, data: { header: false, footer: true } },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: TranslationComponent }
];

@NgModule({
  imports: [LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    }),RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
  ],
  exports: [RouterModule,LocalizeRouterModule]
})
export class ViewsRoutingModule { }
