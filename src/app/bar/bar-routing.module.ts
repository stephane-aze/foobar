import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarAddComponent } from './bar-add/bar-add.component';
import { BarListComponent } from './bar-list/bar-list.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';



const routes: Routes = [
  { path: 'partners', component: BarAddComponent },
  { path: ':id', component: BarDetailsComponent },
  { path: '', pathMatch: 'full', component: BarListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
