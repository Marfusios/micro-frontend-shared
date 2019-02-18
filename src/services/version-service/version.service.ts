import { Injectable } from '@angular/core';

@Injectable()
export class VersionService {

  public called = 0;
  public lastService = 'none';

  public getVersion(): string {
    return '2.1';
  }

  public registerService(serviceName: string) {
    this.lastService = serviceName;
    this.called++;
  }
}
