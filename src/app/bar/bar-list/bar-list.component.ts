import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FbappPage } from 'src/app/shared/FbappPage';
import { BarService } from '../bar.service';
//import { Character } from '../Character';
import { DataLoaderService } from 'src/app/shared/data-loader.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.scss'],
  providers: [DataLoaderService],
})
export class BarListComponent implements OnInit, FbappPage {
  public readonly pageTitle = 'Liste des bars';
  public readonly filterPlaceholder = 'Filter by name';
  public filterInput!: string;
  constructor(
    private readonly barService: BarService,
    //private readonly barsLoaderService: DataLoaderService<>,
    private readonly userService: UserService,

  ) { }

  ngOnInit() {

  }
  /*public onFilter(): void {
    this.barsLoaderService.transform(characters => {
      return characters.filter(character => {
        return character.nameStartsWith(this.filterInput);
      });
    });
  }
  public reset(): void {
    this.barsLoaderService.reset();
    this.filterInput = '';
  }
  /*public onSelectCharacter(character: Character): void {
    if (this.userService.currentUser) {
      this.userService.addFavoriteCharacter(character.id).subscribe(() => {
        this.favoriteCharacterId = character.id;
      });
    }
  }

  private initFavoriteCharaterId(): void {
    const { currentUser } = this.userService;
    if (currentUser) {
      this.favoriteCharacterId = currentUser.favoriteCharacter;
    }
  }

  private initCharactersLoader(): void {
    const characters$ = this.listCharacters();
    this.charactersLoaderService.init(characters$);
    this.characters$ = this.charactersLoaderService.stream$;
  }

  private listBars(): Observable<Character[]> {
    return this.barService.getList();
  }*/
}
