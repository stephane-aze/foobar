import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {ProfilesComponent } from './profiles/profiles.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profiles', component: ProfilesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
