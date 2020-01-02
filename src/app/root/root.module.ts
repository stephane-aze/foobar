import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { BarModule } from '../bar/bar.module';
import { RootRoutingModule } from './root-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HomeComponent, NavComponent, FooterComponent ],
  imports: [
    SharedModule,
    RootRoutingModule,
    UserModule,
    BarModule
  ],
  exports: [NavComponent, FooterComponent],

})
export class RootModule { }
