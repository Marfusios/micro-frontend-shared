import { Component, Input } from '@angular/core';

export interface AppLabel {
  text: string;
  subText: string;
}

@Component({
  selector: 'app-label',
  templateUrl: './app-label.component.html',
  styleUrls: ['./app-label.component.scss']
})
export class AppLabelComponent implements AppLabel {
  @Input() text: string;
  @Input() subText: string;
}
