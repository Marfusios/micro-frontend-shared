import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mfsComponents from '../components';

const components = [
  mfsComponents.MfsLabelComponent,
  mfsComponents.MfsInputComponent,
  mfsComponents.MfsFieldComponent,
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
  ],
})
export class EntryModule { }
