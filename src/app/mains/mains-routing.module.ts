import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

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

const mainRoutes:Routes=[
    { 
      path: '',
      component:MainsComponent,  
      children:[
        {
            path:'',
            loadChildren:'app/business/content/content.module#ContentModule'
        },
        {
            path:'content',
            loadChildren:'app/business/content/content.module#ContentModule'
        },
        {
            path:'userinfo',
            component:UserinfoComponent
        },
        {
            path:'password',
            component:PasswordComponent
        },
        {
            path:'loginfo',
            component:LoginfoComponent
        },
        {
            path:'user-management',
            component:UserManagementComponent
        },
        {
            path:'rule-management',
            component:RuleManagementComponent
        },
        {
            path:'list-management',
            component:ListManagementComponent
        },
        {
            path:'sys-option-management',
            component:SysOptionManagementComponent
        },
        {
            path:'sys-config-management',
            component:SysConfigManagementComponent
        },
        {
            path:'project-demo',
            component:ProjectDemoComponent
        },
        {
            path:'text-option',
            component:TextOptionComponent
        }
      ]
      
    }
]
@NgModule({
    imports: [
      RouterModule.forChild(mainRoutes)
    ],
    declarations: [],
    exports:[
      RouterModule
    ]
  })
  export class MainsRoutingModule { }