import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

import 'froala-editor/js/froala_editor.min.js';

@Component({
  selector: 'app-text-editor',
  templateUrl: './app-text-editor.component.html', 
  styleUrls: ['./app-text-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppTextEditorComponent implements AfterViewInit {
  @ViewChild('aceEditor') aceEditor: AceEditorComponent;
  public text = 'Ace editor example text';

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
