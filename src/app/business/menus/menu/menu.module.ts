import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenuComponent } from './menu.component';
// import { ContentComponent } from '../../content/content.component';
import { UserinfoComponent } from '../../user/userinfo/userinfo.component';
import { MenuRoutingModule } from './menu-routing.module';
import { PasswordComponent } from '../../user/password/password.component';
import { LoginfoComponent } from '../../user/loginfo/loginfo.component';
import { UserManagementComponent } from '../../sys/user-management/user-management.component';
import { RuleManagementComponent } from '../../sys/rule-management/rule-management.component';
import { ListManagementComponent } from '../../sys/list-management/list-management.component';
import { SysOptionManagementComponent } from '../../sys/sys-option-management/sys-option-management.component';
import { SysConfigManagementComponent } from '../../sys/sys-config-management/sys-config-management.component';
import { ProjectDemoComponent } from '../../text/project-demo/project-demo.component';
import { TextOptionComponent } from '../../text/text-option/text-option.component';


@NgModule({
  imports:[
      CommonModule,
      MenuRoutingModule
  ],
  declarations:[
    MenuComponent,
    UserinfoComponent,
    // ContentComponent,
    PasswordComponent,
    LoginfoComponent,
    UserManagementComponent,
    RuleManagementComponent,
    ListManagementComponent,
    SysOptionManagementComponent,
    SysConfigManagementComponent,
    ProjectDemoComponent,
    TextOptionComponent
  ]
})
export class MenuModule{}