import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bar} from '../Bar';

@Component({
  selector: 'fbapp-bar-thumbnail',
  templateUrl: './bar-thumbnail.component.html',
  styleUrls: ['./bar-thumbnail.component.scss']
})
export class BarThumbnailComponent {
  @Input() public bar!: Bar;
  @Input() public isFavorite!: boolean;
  @Output() public chose = new EventEmitter<any>();

  public openBarDetails(bar:Bar): void {
    console.log(bar);
    //this.chose.emit(this.bar);
  }
  public onSelectCharacter(bar: Bar): void {

  }

}
