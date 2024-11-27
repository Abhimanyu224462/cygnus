import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFComponent } from './main/create-f/create-f.component';
import { DisplayFComponent } from './main/display-f/display-f.component';
import { LoginFComponent } from './main/login-f/login-f.component';

const routes: Routes = [
  {path:'createF',component:CreateFComponent},
  {path:'displayF',component:DisplayFComponent},
  {path:'login',component:LoginFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
