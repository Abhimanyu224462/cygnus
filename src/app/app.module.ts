import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './HandF/header/header.component';
import { FooterComponent } from './HandF/footer/footer.component';
import { CreateFComponent } from './main/create-f/create-f.component';
import { DisplayFComponent } from './main/display-f/display-f.component';
import { LoginFComponent } from './main/login-f/login-f.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './HandF/home/home.component';
import { NotFoundComponent } from './HandF/not-found/not-found.component';
import { SignUPComponent } from './main/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateFComponent,
    DisplayFComponent,
    LoginFComponent,
    HomeComponent,
    NotFoundComponent,
    SignUPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
