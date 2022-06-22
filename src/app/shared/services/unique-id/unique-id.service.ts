import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()

export class UniqueIdService {

  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if(!prefix) {
      throw Error('Prefix can\t be empty');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId() {
    return uuidv4();
  }
}