import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFComponent } from './main/create-f/create-f.component';
import { DisplayFComponent } from './main/display-f/display-f.component';
import { LoginFComponent } from './main/login-f/login-f.component';
import { HomeComponent } from './HandF/home/home.component';
import { NotFoundComponent } from './HandF/not-found/not-found.component';
import { SignUPComponent } from './main/sign-up/sign-up.component';

const routes: Routes = [
  {path:'createF',component:CreateFComponent},
  {path:'displayF',component:DisplayFComponent},
  {path:'login',component:LoginFComponent},
  {path:'signup',component:SignUPComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
