import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainsComponent } from './mains.component';

// import {MainsAnimate} from './animate';
// import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

import { MainsRoutingModule  } from './mains-routing.module';
@NgModule({
    imports:[
        CommonModule,
        MainsRoutingModule
    ],
    declarations:[
        MainsComponent,
        // MainsAnimate,
        // NotFoundPageComponent,
    ]
})
export class MainsModule{}