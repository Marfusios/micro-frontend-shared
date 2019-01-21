import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLabelComponent } from './app-label/app-label.component';
import { AppInputComponent } from './app-input/app-input.component';
import { AppFieldComponent } from './app-field/app-field.component';
import { AppVersionComponent } from './app-version/app-version.component';

import { AppActionsComponent } from './app-actions/app-actions.component';
import { AlertService } from '../services';

const formComponents = [
  AppLabelComponent,
  AppInputComponent,
  AppFieldComponent,
  AppVersionComponent,
  AppActionsComponent,
];

const services = [
  AlertService,
];

@NgModule({
  declarations: [
    ...formComponents,
  ],
  providers: [
    ...services,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...formComponents,
  ]
})
export class ComponentsModule { }
