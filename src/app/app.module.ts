import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([
     
      {path:'dangnhap' , component:DangnhapComponent },
    
    ])
  ],
  declarations: [ AppComponent, HelloComponent, DangnhapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
