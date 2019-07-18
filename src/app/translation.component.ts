import { Component, Input,Directive } from '@angular/core';
import { I18nService, I18nServiceConfig, I18nDirective } from 'ng2-i18next/ng2-i18next';

@Component({
  selector: 'translation',
  templateUrl: '/translation.component.html',
  styles: [`h1 { font-family: Lato; }`],
  providers: [I18nDirective]
})
export class TranslationComponent  {
  @Input() name: string;
}
