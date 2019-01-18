import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfsLabelComponent } from './mfs-label/mfs-label.component';
import { MfsInputComponent } from './mfs-input/mfs-input.component';
import { MfsFieldComponent } from './mfs-field/mfs-field.component';
import { MfsVersionComponent } from './mfs-version/mfs-version.component';

const components = [
  MfsLabelComponent,
  MfsInputComponent,
  MfsFieldComponent,
  MfsVersionComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...components,
  ]
})
export class ComponentsModule { }

