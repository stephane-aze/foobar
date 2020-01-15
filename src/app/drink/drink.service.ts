import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap, switchMap, mergeMap } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
import { DrinkModel } from './DrinkModel';
import { DrinkShape } from './DrinkShape';
import Param from './Param.json';
import { Drink } from './Drink.entity';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  uri = 'https://projet-annuel-node.herokuapp.com';
  //uri = 'http://localhost:3000';

  private Drink!: DrinkModel;
  public drinks$: Observable<Drink[]>;

  constructor(private readonly httpClient: HttpClient) { }

  public getListDrink(BarId: string): Observable<Drink[]>{
    return this.httpClient.get(`${this.uri}/api/bars/${BarId}/drinks`).pipe(
      map((data:Drink[])=>{
        data.map((drink:Drink)=>{this.httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.libelle}`)
          .subscribe((search:any)=>{
            if(!search.drinks){
              var files=drink.libelle.replace(/[ ,-]/g, '_');
              files=files.toUpperCase();
              return Object.assign(drink,{img :Param.url+Param[files]+'.png'});

            }
            var searchDrink=search.drinks;
            if(Array.isArray(search.drinks)){
              searchDrink=search.drinks[0];
            }
          return Object.assign(drink,{img : searchDrink.strDrinkThumb});
        })
      });
      console.log(data);

      return data;
      }),
     tap((drinks: Drink[])=>{
       if(true){
         drinks.filter((drink: Drink) =>{
           drink.isAlcohol==false;
           return drink;
        })
       }
     })/* */
      );

  }
  public find(idDrink){
    return this.httpClient.get<DrinkModel>(`${this.uri}/api/drinks/`+idDrink);

    //return this.requestDrink(idDrink).pipe(map(Drink.NEW));

  }
  public requestDrink(idDrink):Observable<DrinkModel>{
    return this.httpClient.get<DrinkModel>(`${this.uri}/api/drinks/`+idDrink);

  }

}

