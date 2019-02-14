import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/mode-html.js';
import 'ace-builds/src-noconflict/mode-sql.js';

@Component({
  selector: 'app-editor',
  templateUrl: './app-editor.component.html',
  styleUrls: ['./app-editor.component.scss'],
})
export class AppEditorComponent implements AfterViewInit {
  @ViewChild('aceEditor') aceEditor: AceEditorComponent;
  public text = 'Ace example text';

  ngAfterViewInit() {
      this.aceEditor.getEditor().setOptions({

      });

      this.aceEditor.getEditor().commands.addCommand({
          name: 'showOtherCompletions',
          bindKey: 'Ctrl-.',
          exec: function (editor) {
            console.log(editor);
          }
      });
  }
}
