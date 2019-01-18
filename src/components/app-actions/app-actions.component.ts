import { Component, Output, EventEmitter } from '@angular/core';

export interface AppActions {
  saved: EventEmitter<void>;
}

@Component({
  selector: 'app-actions',
  templateUrl: './app-actions.component.html',
  styleUrls: ['./app-actions.component.scss']
})
export class AppActionsComponent implements AppActions {
  @Output() saved: EventEmitter<void> = new EventEmitter();
}
