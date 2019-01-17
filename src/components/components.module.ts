import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfsLabelComponent } from '../components/mfs-label/mfs-label.component';
import { MfsInputComponent } from '../components/mfs-input/mfs-input.component';
import { MfsFieldComponent } from '../components/mfs-field/mfs-field.component';

const components = [
  MfsLabelComponent,
  MfsInputComponent,
  MfsFieldComponent,
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

