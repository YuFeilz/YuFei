import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainsComponent } from './mains.component';
import { UserinfoComponent } from '../business/user/userinfo/userinfo.component';
import { PasswordComponent } from '../business/user/password/password.component';
import { LoginfoComponent } from '../business/user/loginfo/loginfo.component';
import { UserManagementComponent } from '../business/sys/user-management/user-management.component';
import { RuleManagementComponent } from '../business/sys/rule-management/rule-management.component';
import { ListManagementComponent } from '../business/sys/list-management/list-management.component';
import { SysOptionManagementComponent } from '../business/sys/sys-option-management/sys-option-management.component';
import { SysConfigManagementComponent } from '../business/sys/sys-config-management/sys-config-management.component';
import { ProjectDemoComponent } from '../business/text/project-demo/project-demo.component';
import { TextOptionComponent } from '../business/text/text-option/text-option.component';
import { MainsRoutingModule  } from './mains-routing.module';
@NgModule({
    imports:[
        CommonModule,
        MainsRoutingModule
    ],
    declarations:[
        MainsComponent,
        UserinfoComponent,
        PasswordComponent,
        LoginfoComponent,
        UserManagementComponent,
        RuleManagementComponent,
        ListManagementComponent,
        SysOptionManagementComponent,
        SysConfigManagementComponent,
        ProjectDemoComponent,
        TextOptionComponent,
    ]
})
export class MainsModule{}