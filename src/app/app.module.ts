import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponentComponent } from './appointment-component/appointment-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { VisitComponentComponent } from './visit-component/visit-component.component';
import { SchedularComponentComponent } from './schedular-component/schedular-component.component';
import { ProcdureComponentComponent } from './procdure-component/procdure-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AddProcdureComponent } from './add-procdure/add-procdure.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponentComponent,
    MainComponentComponent,
    VisitComponentComponent,
    SchedularComponentComponent,
    ProcdureComponentComponent,
    SignupComponentComponent,
    AddProcdureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
