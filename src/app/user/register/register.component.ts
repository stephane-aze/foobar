import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'fgapp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,FbappPage {
  public pageTitle = 'Enregistrer';
  @ViewChild('register', { static: false }) registerInput: ElementRef;

  FormRegister: FormGroup;
  public firstName$!: Observable<string>;

  constructor(private readonly userService: UserService,private readonly router: Router,private readonly http: HttpClient) { }

  ngOnInit() : void {
    this.FormRegister = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'pseudo': new FormControl('',[
        Validators.required,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      'age': new FormControl('',[
        Validators.required,
      ]),


    }); // <-- add custom validator at the FormGroup level
  }
  get email() { return this.FormRegister.get('email'); }
  get pseudo() { return this.FormRegister.get('pseudo'); }
  get password() { return this.FormRegister.get('password'); }
  get age() { return this.FormRegister.get('age'); }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }
  private resetForm(formDir: NgForm): void {
    formDir.reset();
    this.registerInput.nativeElement.focus();
  }


    public onSubmit(formDir: NgForm): void {

    const formRes = formDir.value;
    this.userService.create(formRes);
    this.goToHome();


    /*this.http.post('http://127.0.0.1:3000/api/auth', JSON.stringify(body), {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });

     /*this.email$ = this.userService.authenticate(email, password).subscribe(
      (users) => {
        console.log('ok2');
        this.goToHome();
        return null;
      }),
      catchError(() => {
        console.log('die');
        this.resetForm(formDir);
        return of('Login failed');
      }),
    );*/
  }

}
