import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkitkComponent } from './components/dangkitk/dangkitk.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
  RouterModule.forRoot([
    {path: 'dangki', component:DangkiComponent},
    {path: 'dangnhap', component:DangnhapComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, DangkiComponent, DangnhapComponent, DangkitkComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
