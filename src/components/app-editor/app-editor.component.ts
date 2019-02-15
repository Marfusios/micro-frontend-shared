import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';

// Note:
// Ace Editor libs must be included in build
// ---

@Component({
  selector: 'app-editor',
  templateUrl: './app-editor.component.html',
  styleUrls: ['./app-editor.component.scss'],
})
export class AppEditorComponent implements AfterViewInit {
  @ViewChild('aceEditor') aceEditor: AceEditorComponent;
  public text = 'Ace example text';

  ngAfterViewInit() {
      this.aceEditor.getEditor().commands.addCommand({
          name: 'showOtherCompletions',
          bindKey: 'Ctrl-.',
          exec: function (editor) {
            console.log(editor);
          }
      });
  }
}
