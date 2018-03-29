import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  dateTime:Date
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.dateTime=new Date();
    },100)
  }

}
