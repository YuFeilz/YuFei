import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
// import { MainModule } from './main/main.module';
import { ContentComponent } from './business/content/content.component';

import { Menu1Component } from './business/menus/menu1/menu1.component';
import { Menu2Component } from './business/menus/menu2/menu2.component';
import { Menu3Component } from './business/menus/menu3/menu3.component';
import { Menu4Component } from './business/menus/menu4/menu4.component';

import { AppRoutingModule } from './app-routing.module';
import { MainRoutingModule  } from './main/main-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // MainModule,
    MainComponent,
    ContentComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
