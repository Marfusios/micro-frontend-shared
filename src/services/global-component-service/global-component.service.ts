import { Injectable, ComponentFactory } from '@angular/core';

export interface GlobalComponentStorage {
  [key: string]: ComponentFactory<any>;
}

interface ExtendedWindow extends Window {
  AppGlobalComponent: GlobalComponentStorage;
}

function _window(): ExtendedWindow {
   return window as ExtendedWindow;
}

@Injectable()
export class GlobalComponentService {
  constructor() {
    _window().AppGlobalComponent = _window().AppGlobalComponent || { };
    console.log(_window().AppGlobalComponent);
  }

  public getComponent(name: string) {
    if (_window().AppGlobalComponent[name]) {
      return _window().AppGlobalComponent[name];
    }
    return null;
  }
}
