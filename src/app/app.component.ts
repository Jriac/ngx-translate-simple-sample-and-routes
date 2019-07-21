import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  languages: any = ['en', 'es']
  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

  }

  changeLanguage(lang) {
    this.translate.use(lang);
    this.translate.reloadLang(lang).subscribe(data => {
      console.log(data);
    })
  }

}
