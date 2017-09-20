import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {AppService} from './app.service';
import {MaterialModule} from '@angular/material';
import {DataTableModule, SharedModule, OrderListModule,DropdownModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import 'hammerjs';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    OrderListModule,
    MaterialModule,
    FormsModule,
    DropdownModule 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
