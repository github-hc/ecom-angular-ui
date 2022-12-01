import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes=[
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
