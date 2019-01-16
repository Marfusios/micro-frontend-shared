import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mfsComponents from '../components';


@NgModule({
  declarations: [
    mfsComponents.MfsLabelComponent,
    mfsComponents.MfsInputComponent,
    mfsComponents.MfsFieldComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class EntryModule { }
