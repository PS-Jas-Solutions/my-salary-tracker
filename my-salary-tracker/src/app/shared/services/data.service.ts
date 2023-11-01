import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getSelectedSpendingOption() {
    return sessionStorage.getItem('showSpendingOption')
  }
  public setSelectedSpendingOption(value: string) {
    sessionStorage.setItem('showSpendingOption', value)
  }
}
