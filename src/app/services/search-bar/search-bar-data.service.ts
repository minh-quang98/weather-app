import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

const searchBarStorageKey = 'Search_Bar';

@Injectable({
  providedIn: 'root'
})
export class SearchBarDataService {

  constructor(private storageService: StorageService) { }

  saveSearchData(searchData: any): void {
    this.storageService.setData(searchBarStorageKey, searchData);
  }

  getDataSearch(): any {
    return this.storageService.getDataLocalStorage(searchBarStorageKey);
  }
}
