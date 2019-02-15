import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './app-text-editor.component.html',
  styleUrls: ['./app-text-editor.component.scss'],
})
export class AppTextEditorComponent {
  public text = 'Froala editor example text';
}
