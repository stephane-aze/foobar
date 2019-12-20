import { Injectable } from '@angular/core';
import { BarModel } from './bar-add/BarModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  uri = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) { }
  public add(BarCreate: BarModel){
    console.log(BarCreate);
    return this.httpClient.post(`${this.uri}/api/bars`, BarCreate)
      .subscribe(user => {
        console.log(user);

      });
  }
  public getList(){
    return this.httpClient.get(`${this.uri}/api/bars`)
      .subscribe(user => {
        console.log(user);

      });
  }
}
