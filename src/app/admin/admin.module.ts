import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { BarModule } from '../bar/bar.module';



@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BarModule


  ]
})
export class AdminModule { }
