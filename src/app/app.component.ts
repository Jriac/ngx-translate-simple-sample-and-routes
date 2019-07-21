import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from 'localize-router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  languages: any = ['en', 'es']
  constructor(private translate: TranslateService, private localizedRoutesService: LocalizeRouterService) {
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.onLangChange.subscribe((data)=>{
      console.log(data)
     this.localizedRoutesService.changeLanguage(data.lang);
     

    })


  }

  changeLanguage(lang) {
    this.translate.use(lang);
    this.localizedRoutesService.changeLanguage(lang);
  }

}
