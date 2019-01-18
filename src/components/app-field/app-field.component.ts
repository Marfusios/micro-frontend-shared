import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppLabel } from '../app-label/app-label.component';
import { AppInput } from '../app-input/app-input.component';

export interface AppField extends AppLabel, AppInput { }

@Component({
  selector: 'app-field',
  templateUrl: './app-field.component.html',
  styleUrls: ['./app-field.component.scss']
})
export class AppFieldComponent implements AppField {
  @Input() text: string;
  @Input() subText: string;

  @Input() value: string;
  @Input() disabled: boolean;

  @Input() required: boolean;

  @Output() valueChanged = new EventEmitter<string>();
}
