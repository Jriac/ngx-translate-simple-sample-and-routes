import { Injectable, NgModule, Pipe, PipeTransform } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

const translations: any = {};
/**
 * For testing pourpose we can use this module with translate sevice mock and pipe mock
 */
export class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    lang = lang;
    return of(translations);
  }
}

@Pipe({
  name: 'translate'
})
export class TranslatePipeMock implements PipeTransform {
  public name = 'translate';

  public transform(query: string, ...args: any[]): any {
    args = args;
    return query;
  }
}

@Injectable()
export class TranslateServiceStub {
  public get<T>(key: T): Observable<T> {
    return of(key);
  }

  public instant(key: string, options?: object) {
    if (options) {
      return key;
    }

    return key;
  }

  public setDefaultLang(string: any) {
    string = string;
  }
}

@NgModule({
  declarations: [TranslatePipeMock],
  providers: [
    { provide: TranslateService, useClass: TranslateServiceStub },
    { provide: TranslatePipe, useClass: TranslatePipeMock }
  ],
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: FakeLoader }
    })
  ],
  exports: [TranslatePipeMock, TranslateModule]
})
export class TranslateTestingModule {}
