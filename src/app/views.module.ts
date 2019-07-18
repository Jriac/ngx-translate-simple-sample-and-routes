import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { TranslationModule } from './translation.module';

@NgModule({
  imports: [
    ViewsRoutingModule,
    TranslationModule
  ]
})
export class ViewsModule {}
