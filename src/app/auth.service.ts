import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { tap,delay } from 'rxjs/operators'; 

@Injectable()
export class AuthService {
  isLoggedIn=false;
  redirectUrl:string;
  login():Observable<boolean>{
    return of(true).pipe(
      delay(500),
      tap(val=>this.isLoggedIn=true)
    );
  }
  logout(){
    this.isLoggedIn=false;
  }
}
