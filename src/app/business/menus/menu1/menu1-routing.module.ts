import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { Menu1Component } from './menu1.component';
import { ContentComponent } from '../../content/content.component';
import { UserinfoComponent } from '../../user/userinfo/userinfo.component';
import { PasswordComponent } from '../../user/password/password.component';
import { LoginfoComponent } from '../../user/loginfo/loginfo.component';
import { UserManagementComponent } from '../../sys/user-management/user-management.component';
import { RuleManagementComponent } from '../../sys/rule-management/rule-management.component';
import { ListManagementComponent } from '../../sys/list-management/list-management.component';
import { SysOptionManagementComponent } from '../../sys/sys-option-management/sys-option-management.component';
import { SysConfigManagementComponent } from '../../sys/sys-config-management/sys-config-management.component';
import { ProjectDemoComponent } from '../../text/project-demo/project-demo.component';
import { TextOptionComponent } from '../../text/text-option/text-option.component';

const Menu1Routes:Routes=[
    {
        path:'',
        component:Menu1Component,
        children:[
            {
                path:'',
                component:ContentComponent
            },
            {
                path:'content',
                component:ContentComponent
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
    imports:[
        RouterModule.forChild(Menu1Routes)
    ],
    declarations:[],
    exports:[
        RouterModule
    ]
})
export class Menu1RoutingModule{

}