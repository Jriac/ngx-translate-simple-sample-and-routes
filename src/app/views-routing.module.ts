import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OtherComponent} from './other-module/other.component'
import { TranslationComponent } from './translation/translation.component';


const routes: Routes = [
  { path: 'landing', component: TranslationComponent, data: { header: false, footer: true } },
  { path: 'other', component: OtherComponent, data: { header: false, footer: true } },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: TranslationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
