import { Component } from '@angular/core';
import { FbappPage } from './shared/FbappPage';

@Component({
  selector: 'fbapp-root',
  template: `
  <fbapp-nav [pageName]="activatedPageName"></fbapp-nav>
  <div class="app-container main">

    <router-outlet (activate)="onRouteActivated($event)" ></router-outlet>

  </div>
  <fbapp-footer></fbapp-footer>

`
})
export class AppComponent {
  public activatedPageName = 'fbappapp';

  public onRouteActivated(activatedPage: FbappPage): void {
    this.activatedPageName = activatedPage.pageTitle;
  }

}
