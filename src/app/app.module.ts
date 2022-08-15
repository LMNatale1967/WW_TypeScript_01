import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { MySecondComponentComponent } from './components/my-second-component/my-second-component.component';
import { MyThirdComponentComponent } from './components/my-third-component/my-third-component.component';


@NgModule({
  declarations: [
    AppComponent,    
    MyFirstComponentComponent,
    MySecondComponentComponent,
    MyThirdComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
