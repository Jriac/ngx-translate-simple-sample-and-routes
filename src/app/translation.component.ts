import { Component, Input,Directive } from '@angular/core';

@Component({
  selector: 'translation',
  templateUrl: '/translation.component.html',
  styles: [`h1 { font-family: Lato; }`],
  providers: []
})
export class TranslationComponent  {
  @Input() name: string;
}
