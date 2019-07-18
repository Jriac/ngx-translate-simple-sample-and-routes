import { NgModule } from '@angular/core';

import { ViewsRoutingModule } from './views-routing.module';

import { TranslationModule } from './';

@NgModule({
  imports: [
    ViewsRoutingModule,
    PageNotFoundModule,
    LandingModule,
    PreOrderModule,
    SummaryModule,
    TermsAndConditionsModule,
    PreBookedDialogModule,
    PaymentErrorDialogModule,
    ExistingUserDialogModule
  ]
})
export class ViewsModule {}
