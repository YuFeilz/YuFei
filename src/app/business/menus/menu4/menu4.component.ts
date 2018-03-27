import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component implements OnInit {
  @Input() isShow=true
  constructor() { }

  ngOnInit() {
  }

}
