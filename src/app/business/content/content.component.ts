import { Component, OnInit } from '@angular/core';
import { ContentService,Item } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  dateTime:Date;
  ads:Item[];
  constructor( private contentservice:ContentService ) { }

  ngOnInit() {
    setInterval(()=>{
      this.dateTime=new Date();
    },100)
    this.ads=this.contentservice.getAds();
  }

}
