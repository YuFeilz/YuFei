import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { Menu1Component } from '../business/menus/menu1/menu1.component';
import { MainRoutingModule  } from './main-routing.module';

@NgModule({
    declarations:[
        MainComponent,
        Menu1Component 
    ],
    imports:[
        BrowserModule,
        MainRoutingModule
    ]
})
export class MainModule{}