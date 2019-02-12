import { Component } from '@angular/core';
import { VersionService } from '../../services';
import * as momentImported from 'moment';

const moment = momentImported['default'];

@Component({
  selector: 'app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.scss']
})
export class AppVersionComponent {
  constructor(public versionService: VersionService) { }

  public getMoment(): string {
    return moment().format('MMMM Do YYYY');
  }
}
