import { Component, Input, ViewChild, ViewContainerRef, AfterContentInit } from '@angular/core';
import { GlobalComponentService } from '../../services';

@Component({
  selector: 'app-dynamic',
  template: '<ng-container #dynamicContainer></ng-container>',
})
export class AppDynamicComponent implements AfterContentInit {
  @Input() public name: string;

  @ViewChild('dynamicContainer', {read: ViewContainerRef}) dynamicContainer: ViewContainerRef;

  constructor(private _globalComponentService: GlobalComponentService) { }

  ngAfterContentInit() {
    const factory = this._globalComponentService.getComponent(this.name);
    this.dynamicContainer.createComponent(factory);
  }

}
