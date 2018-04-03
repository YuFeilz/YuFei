import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {
  isUserinfo=true;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout():void{
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },3000)
  }
  onMouseover():void{
    this.isUserinfo=false;
  }
  onMouseout():void{
    this.isUserinfo=true;
  }
  user():void{
    this.router.navigate(['mains/menu1/userinfo']);
  }
  password():void{
    this.router.navigate(['/mains/menu1/password']);
  }
}
