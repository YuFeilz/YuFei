import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

const ContentRoutes:Routes=[
    {
        path:'',
        component:ContentComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(ContentRoutes)
    ],
    declarations:[],
    exports:[
        RouterModule
    ]
})
export class ContentRoutingModule{

}