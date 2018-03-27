import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {
  isShow=1
  constructor() { }

  ngOnInit() {
  }
  toggleIsShow():void{
    if(this.isShow){
      this.isShow=0;
    }else{
      this.isShow=1;
    }
  }

}
