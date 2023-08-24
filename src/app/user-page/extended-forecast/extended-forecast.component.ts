import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-extended-forecast',
  templateUrl: './extended-forecast.component.html',
  styleUrls: ['./extended-forecast.component.scss']
})
export class ExtendedForecastComponent implements OnInit {
  @Input() dataSearch: any

  listWeatherRaw: any[] = [];
  listWeather: any[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getDataExtendedForecast(this.dataSearch).subscribe(
      response => {
        const rawList: any[] = [];
        response.data.map((item: any) => {
          rawList.push({
            date: item.datetime,
            icon: item.weather.icon,
            descrition: item.weather.description,
            temp: item.app_max_temp.toFixed(0) + '°/' + item.app_min_temp.toFixed(0) + '°'
          })
        })
        this.listWeather = rawList;
      }
    )
  }
}
