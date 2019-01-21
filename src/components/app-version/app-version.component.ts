import { Component } from '@angular/core';
import { VersionService } from '../../services';

@Component({
  selector: 'app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.scss']
})
export class AppVersionComponent {
  constructor(public versionService: VersionService) { }
}
