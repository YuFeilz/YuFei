import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { tap,delay } from 'rxjs/operators'; 

document.cookie='isLoggedIn=false';
@Injectable()
export class AuthService {
  redirectUrl:string;
  login():Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap(val=>document.cookie="isLoggedIn=true")
    );
  }
}
