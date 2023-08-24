import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { SearchBarDataService } from '../services/search-bar/search-bar-data.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  showData: boolean = false;
  searchData: any

  constructor(private searchBarDataService: SearchBarDataService) {}

  handleSearch(search : any): void {
    this.searchBarDataService.saveSearchData(search);
    this.searchData = search;

    this.showData = search ? true : false;
  }
}
