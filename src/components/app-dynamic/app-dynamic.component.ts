import { Component, Input, ViewChild, ViewContainerRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: '<ng-container #dynamicContainer></ng-container>',
})
export class AppDynamicComponent implements AfterContentInit {
  @Input() public name: string;

  @ViewChild('dynamicContainer', {read: ViewContainerRef}) dynamicContainer: ViewContainerRef;

  ngAfterContentInit() {
    const factory = window['GLOBAL_COMPONENTS'][this.name];
    this.dynamicContainer.createComponent(factory);
  }

}
