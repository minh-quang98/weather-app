import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getDataLocalStorage(key: string): any {
    console.log('check>>>', localStorage.getItem(key));
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return data
    }
  }

  setData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
