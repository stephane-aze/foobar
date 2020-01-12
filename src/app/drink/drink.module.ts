import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkThumbnailComponent } from './drink-thumbnail/drink-thumbnail.component';


@NgModule({
  declarations: [DrinkListComponent, DrinkThumbnailComponent],
  imports: [
    CommonModule,
    DrinkRoutingModule
  ],
  exports: [ DrinkThumbnailComponent ]
})
export class DrinkModule { }
