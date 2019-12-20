import { Component } from '@angular/core';
import { FbappPage } from './shared/FbappPage';

@Component({
  selector: 'fbapp-root',
  template: `
   <div class="app-container">
    <fbapp-nav [pageName]="activatedPageName"></fbapp-nav>
    <div class="container page">
    <router-outlet (activate)="onRouteActivated($event)"></router-outlet>
    </div>
    <fbapp-footer></fbapp-footer>

  </div>

`
})
export class AppComponent {
  public activatedPageName = 'fbappapp';

  public onRouteActivated(activatedPage: FbappPage): void {
    this.activatedPageName = activatedPage.pageTitle;
  }

}
