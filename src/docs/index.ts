import { AgGridModule } from 'ag-grid-angular';
import { AceEditorModule } from 'ng2-ace-editor';

import { MatCardModule } from '@angular/material';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { AppTableComponent } from '../components/app-table/app-table.component';
import { AppVersionComponent } from '../components/app-version/app-version.component';
import { VersionService } from '../services';
import { AppEditorComponent } from '../components/app-editor/app-editor.component';

storiesOf('Components', module)
  .addDecorator(
    moduleMetadata({
      imports: [MatCardModule, AceEditorModule, AgGridModule.withComponents([])],
      schemas: [],
      declarations: [AppVersionComponent, AppTableComponent],
      providers: [VersionService],
    })
  )
  .add('version component', () => ({
    component: AppVersionComponent,
  }))
  .add('editor component', () => ({
    component: AppEditorComponent,
  }))
  .add('table component', () => ({
    component: AppTableComponent,
  }));
