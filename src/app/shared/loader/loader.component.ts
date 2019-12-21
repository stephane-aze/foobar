import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbapp-loader',
  template: `
  <span id="loader"></span>
`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
