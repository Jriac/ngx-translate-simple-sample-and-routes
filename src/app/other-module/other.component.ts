import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-other-module',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor(translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  
  
  }

}