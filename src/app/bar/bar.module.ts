import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarAddComponent } from './bar-add/bar-add.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { BarRoutingModule } from './bar-routing.module';
import { BarListComponent } from './bar-list/bar-list.component';



@NgModule({
  declarations: [BarAddComponent, BarListComponent],
  imports: [
    CommonModule,
    BarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BarModule { }
