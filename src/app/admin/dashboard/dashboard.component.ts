import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import {AdminService } from '../admin.service';
import { FbappPage } from 'src/app/shared/FbappPage';
import { BarService } from '../../bar/bar.service';
import { Bar} from '../../bar/Bar';
import { Router } from '@angular/router';

import { DataLoaderService } from 'src/app/shared/data-loader.service';


@Component({
  selector: 'fbapp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DataLoaderService],
})
export class DashboardComponent implements OnInit {

  public readonly pageTitle = 'Liste des bars en attente de validation';
  public bars$: Observable<Bar[]>;

  public filterInput!: string;
  constructor(
    private readonly barService: BarService,
    private readonly barsLoaderService: DataLoaderService<Bar[]>,
    private readonly adminService: AdminService,
    private router: Router

  ) { }

  ngOnInit() {

    this.initBarsLoader();

    this.listBars();

  }
  public reset(): void {
    this.barsLoaderService.reset();
    this.filterInput = '';
  }
 /* private initFavoriteCharaterId(): void {
    const { currentUser } = this.userService;
    if (currentUser) {
      this.favoriteCharacterId = currentUser.favoriteCharacter;
    }
  }
*/
  private initBarsLoader(): void {
    const bars$ = this.listBars();
    this.barsLoaderService.init(bars$);
    this.bars$ = this.barsLoaderService.stream$;
  }

  private listBars(): Observable<Bar[]>{

    return this.barService.getListBarInvalide();
  }
  public isValid(bar:Bar){
    //alert('ok');
    this.bars$=this.barService.ValidateBar(bar);

  }
}



