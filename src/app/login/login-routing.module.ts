import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const loginRouting:Routes=[
  {
    path:'',
    component:LoginComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(loginRouting)
  ],
  declarations: []
})
export class LoginRoutingModule { }
