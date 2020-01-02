import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FbappPage } from 'src/app/shared/FbappPage';
import { DrinkService } from '../drink.service';
import { DrinkModel } from '../DrinkModel';
import { DataLoaderService } from 'src/app/shared/data-loader.service';
//import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'fbapp-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit, FbappPage {
  public readonly pageTitle = 'Liste des Boissons';
  public drinks$: DrinkModel[];
  constructor(
    private readonly drinkService: DrinkService,
    //private readonly barsLoaderService: DataLoaderService<Character[]>,
    //private readonly userService: UserService,

  ) { }

  ngOnInit() {


    this.getListsDrink();

  }
  private getListsDrink(){
    return this.drinkService.getListDrink().subscribe((res: DrinkModel[]) => {
      //console.log(res)
     this.drinks$=res;
    }, (err) => {
      console.log('ko')
    });
  }
  public onSelectDrink(drink: DrinkModel): void {
    alert(drink.libelle)/*if (this.userService.currentUser) {
      this.userService.addFavoriteCharacter(character.id).subscribe(() => {
        this.favoriteCharacterId = character.id;
      });
    }*/
  }
}
