import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '../Drink.entity';

@Component({
  selector: 'fbapp-drink-thumbnail',
  templateUrl: './drink-thumbnail.component.html',
  styleUrls: ['./drink-thumbnail.component.scss'],
  
})
export class DrinkThumbnailComponent {
  @Input() public drink: Drink;


}
