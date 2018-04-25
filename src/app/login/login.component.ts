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
  ) {  }
  ngOnInit() {
       
  }
  login():void{
    this.message = '正在登录...';
    this.authService.login().subscribe(()=>{
      if(document.cookie.split('=')[1]="true"){
        let redirect=this.authService.redirectUrl?this.authService.redirectUrl:'/mains/content';
        this.router.navigate([redirect]);
      }
      this.message='登录';
    })
    
  }
}
