import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-extended-forecast',
  templateUrl: './extended-forecast.component.html',
  styleUrls: ['./extended-forecast.component.scss']
})
export class ExtendedForecastComponent implements OnInit {
  listWeatherRaw: any[] = [];
  listWeather: any[] = [];

  constructor(private configService: ConfigService) {
    // this.getDataExtendedForecast();
  }

  async getDataExtendedForecast() {
    this.listWeatherRaw = (await this.configService.getData('http://api.weatherbit.io/v2.0/forecast/daily?city=HaNoi&country=VietNam&key=c649d58a96ab4dfaaf38263600589fee&days=7').toPromise()).data;
    const rawList: any[] = [];
    this.listWeatherRaw.map(item => {
      rawList.push({
        date: item.datetime,
        icon: item.weather.icon,
        descrition: item.weather.description,
        temp: item.app_max_temp.toFixed(0) + '°/' + item.app_min_temp.toFixed(0) + '°'
      })
    })
    this.listWeather = rawList;
  }

  ngOnInit(): void {

  }
}
