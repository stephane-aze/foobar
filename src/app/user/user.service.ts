import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { UserModel } from '../user/user/UserModel';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../user/auth/auth.service';
import { UserResourceService } from './user/user-resource.service';
import { User } from './User';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authenticatedUser!: User;
  uri = 'https://projet-annuel-node.herokuapp.com';
  public constructor(private readonly auth: AuthService, private readonly resource: UserResourceService,private readonly httpClient: HttpClient) {}

  public get currentUser() {
    return this.authenticatedUser;
  }
  public authenticate(email: string, password: string) {
    const body = { email, password };

    return this.httpClient.post(`${this.uri}/api/auth/users`, body).pipe(
      map(User.NEW),
      tap(user => {
        console.log(user);
        this.authenticatedUser = user;
      }));
  }
  public create(userCreate: UserModel) {
    console.log(userCreate);
    return this.httpClient.post(`${this.uri}/api/users`, userCreate)
      .subscribe(user => {
        console.log(user);

      });
  }

  public logout(): void {
    this.authenticatedUser = null;
  }


}
