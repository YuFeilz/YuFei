import { Component, OnInit } from '@angular/core';

import { Datas } from './test';
@Component({
  selector: 'app-loginfo',
  templateUrl: './loginfo.component.html',
  styleUrls: ['./loginfo.component.css']
})

export class LoginfoComponent implements OnInit {
  arr=[];
  constructor(
  ) { 
  }

 datas:Datas={
    'one':1,
    'two':2,
    'there':3,
    'four':4,
    'five':5,
    'six':6,
    'seven':7,
    'eight':8
  }

  ngOnInit() {
    for(let i=0;i<20;i++){
      this.arr.push(this.datas);
    }
  }

}

