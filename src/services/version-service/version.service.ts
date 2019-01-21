import { Injectable } from '@angular/core';

@Injectable()
export class VersionService {
  public getVersion(): string {
    return '2.1';
  }
}
