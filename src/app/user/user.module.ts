import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule } from '@angular/material';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesDialog } from './profiles/profiles-dialog';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfilesComponent,ProfilesDialog],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    ProfilesDialog
  ],
  providers: [
    MatDatepickerModule,
  ],
})
export class UserModule { }
