import { Component, Input,Directive, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'translation',
  templateUrl: '/translation.component.html',
  styles: [`h1 { font-family: Lato; }`],
  providers: []
})
export class TranslationComponent implements OnInit  {
  constructor(private route: ActivatedRoute){
  }
  header:boolean;

ngOnInit(){
   this.route.data.subscribe(data=>{
      this.header = data.header;
      console.log(data.header)
  });
}

  
}
