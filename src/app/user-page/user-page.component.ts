import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { SearchBarDataService } from '../services/search-bar/search-bar-data.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  accessKey: string = 'c649d58a96ab4dfaaf38263600589fee';

  constructor(private configService: ConfigService, private searchBarDataService: SearchBarDataService) {}

  handleSearch(search : any): void {
    this.searchBarDataService.saveSearchData(search);

    // this.configService.getData(`http://api.weatherbit.io/v2.0/current?city=${search.city}&country=${search.country}&key=${this.accessKey}`).subscribe(
    //   result => {
    //     this.dataCurrentWeather = result;
    //     console.log('check>>>', result.data[0]);

    //   }, error => {
    //     console.log('check>>> error: ' + error);
    //   }
    // )
  }
}
