import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DangkyComponent } from './dangky/dangky.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'' , component:HomepageComponent },
      {path:'dangnhap' , component:DangnhapComponent },
      {path:'dangky' , component:DangkyComponent },
    
    ])
  ],
  declarations: [ AppComponent, HelloComponent, DangnhapComponent, HomepageComponent, DangkyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
