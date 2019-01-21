import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  public showDialog(text: string) {
    alert(`Entered text: ${text}`);
  }
}
