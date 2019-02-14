import { AgGridModule } from 'ag-grid-angular';
import { AceEditorModule } from 'ng2-ace-editor';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { AlertService, VersionService } from '../services';
import { counterReducer } from '../store/counter.reducer';
import { AppActionsComponent } from './app-actions/app-actions.component';
import { AppFieldComponent } from './app-field/app-field.component';
import { AppInputComponent } from './app-input/app-input.component';
import { AppLabelComponent } from './app-label/app-label.component';
import { AppTableComponent } from './app-table/app-table.component';
import { AppVersionComponent } from './app-version/app-version.component';
import { AppEditorComponent } from './app-editor/app-editor.component';
import { AppTextEditorComponent } from './app-text-editor/app-text-editor.component';

// console.log(AgGridModule);

const formComponents = [
  AppLabelComponent,
  AppInputComponent,
  AppFieldComponent,
  AppVersionComponent,
  AppActionsComponent,
  AppTableComponent,
  AppEditorComponent,
  AppTextEditorComponent,
];

const services = [
  AlertService,
  VersionService,
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
    StoreModule.forFeature('counter', counterReducer),
    AceEditorModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AgGridModule.withComponents([]),
    MatCardModule,
  ],
  exports: [
    ...formComponents,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
