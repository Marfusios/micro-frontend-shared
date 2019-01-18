import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface AppInput {
  value: string;
  disabled: boolean;

  valueChanged: EventEmitter<string>;
}

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent implements AppInput {
  @Input() value: string;
  @Input() disabled: boolean;

  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();
}
