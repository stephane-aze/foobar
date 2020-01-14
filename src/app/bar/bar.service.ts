import { Injectable } from '@angular/core';
import { BarModel } from './bar-add/BarModel';
import { Bar } from './Bar';
import { BarShape } from './BarShape';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, switchMap,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  uri = 'https://projet-annuel-node.herokuapp.com';
  //uri = 'http://localhost:3000';
  constructor(private readonly httpClient: HttpClient) { }
  public add(BarCreate: BarModel){
    return this.httpClient.post(`${this.uri}/api/bars`, BarCreate)
      .subscribe(bar => {
        console.log(bar);

      });
  }
  public getList(): Observable<BarShape[]>{
    return this.httpClient.get<BarShape[]>(`${this.uri}/api/bars`);

  }
  public getListBarInvalide(): Observable<any[]>{
    return this.getList().pipe(
      map((bars:Bar[])=>{
        const barsNotValidate =bars.filter(obj=>
          obj.isValidate!=true
        );
        return Bar.NEW_BUNCH(barsNotValidate);
    }))
  }
  public getListBarValide(): Observable<Bar[]>{
    return this.getList().pipe(
      map((bars:Bar[])=>{
        const barsNotValidate =bars.filter(obj=>
          obj.isValidate==true
        );
        return Bar.NEW_BUNCH(barsNotValidate);
    }))
  }

  public findOne(BarId: string): Observable<Bar>{
    return this.httpClient.get<Bar>(`${this.uri}/api/bars/${BarId}`);

  }
  public ValidateBar(bar:Bar): Observable<Bar[]>{
    this.updateValidateBar(bar);
    return this.getListBarInvalide();

  }
  public updateValidateBar(bar:Bar){
    console.log(`${this.uri}/api/bars/${bar._id}`,{"isValidate": true})
    this.httpClient.patch(`${this.uri}/api/bars/${bar._id}`,{"isValidate": true}).subscribe((bar)=>{ return bar});

  }

}
