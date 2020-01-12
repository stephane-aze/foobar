import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bar } from '../Bar';
import { BarService } from '../bar.service';
import { Drink } from '../../drink/Drink.entity';
import { DrinkService } from '../../drink/drink.service';


@Component({
  selector: 'fbapp-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.scss']
})
export class BarDetailsComponent implements OnInit {
  public bar$!: Observable<Bar>;

  public drinks$!: Observable<Drink[]>;

  constructor(private route: ActivatedRoute, private drinks:DrinkService, private bars:BarService) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.bar$=this.bars.findOne(id);
    this.drinks$=this.drinks.getListDrink(id);

  }

}
