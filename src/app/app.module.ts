import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsrUptcComponent } from './components/usr-uptc.component';
import { ShowUsrUptcComponent } from './components/show-usr-uptc/show-usr-uptc.component';
import { AddEditUsrUptcComponent } from './components/add-edit-usr-uptc/add-edit-usr-uptc.component';
import { UsrUptcApiService } from "./usr-uptc-api.service";

@NgModule({
  declarations: [
    AppComponent,
    UsrUptcComponent,
    ShowUsrUptcComponent,
    AddEditUsrUptcComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsrUptcApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
