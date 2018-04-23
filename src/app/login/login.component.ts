import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message='登录';
  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    // this.setMessage();   
   }
  //  setMessage(){
  //   this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  //  }
  ngOnInit() {
  }
  login():void{
    this.message = '正在登录...';
    this.authService.login().subscribe(()=>{
      if(this.authService.isLoggedIn){
        let redirect=this.authService.redirectUrl?this.authService.redirectUrl:'/mains/content';
        this.router.navigate([redirect]);
      }
      this.message='登录';
    })
    
  }
}
