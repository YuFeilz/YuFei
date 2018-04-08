import { Component, OnInit } from '@angular/core';
import { ContentService,Item } from './content.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  dateTime:any;
  ads:Item[];
  constructor( private contentservice:ContentService ) { }

  ngOnInit() {
    this.dateTime=new Observable(observer=>{
      setInterval(()=>observer.next(new Date().toString()),1000);
    })
    this.ads=this.contentservice.getAds();
  }

}
