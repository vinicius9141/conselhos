import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeStatsService {
  public changeStatInput: boolean = false;

  constructor() {}

  public changeStat(): boolean {
    return (this.changeStatInput = !this.changeStatInput);
  }
}
