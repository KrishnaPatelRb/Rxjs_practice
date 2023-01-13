import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { LoaderComponent } from './MyComponents/loader/loader.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import {TableModule} from 'primeng/table';
import * as i5 from "@angular/cdk/scrolling";
import {ButtonModule} from 'primeng/button';
import { RxjsComponent } from './MyComponents/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,
    HeaderComponent,
    DashboardComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
