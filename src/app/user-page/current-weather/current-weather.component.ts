import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() dataCurrentWeather: any
  dataWeather: any
  constructor() {}

  ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataCurrentWeather = {
      "app_temp": 39,
      "aqi": 63,
      "city_name": "Huế",
      "clouds": 91,
      "country_code": "VN",
      "datetime": "2023-08-22:09",
      "dewpt": 24.9,
      "dhi": 91.72,
      "dni": 762.18,
      "elev_angle": 29.85,
      "ghi": 464.77,
      "gust": null,
      "h_angle": 75,
      "lat": 16.4619,
      "lon": 107.59546,
      "ob_time": "2023-08-22 09:15",
      "pod": "d",
      "precip": 4,
      "pres": 1002.1,
      "rh": 66,
      "slp": 1004,
      "snow": 0,
      "solar_rad": 195,
      "sources": [
        "VVPB",
        "radar",
        "satellite"
      ],
      "state_code": "66",
      "station": "VVPB",
      "sunrise": "22:34",
      "sunset": "11:10",
      "temp": 32,
      "timezone": "Asia/Ho_Chi_Minh",
      "ts": 1692695732,
      "uv": 1.2911744,
      "vis": 16,
      "weather": {
        "description": "Light rain",
        "code": 500,
        "icon": "r01d"
      },
      "wind_cdir": "E",
      "wind_cdir_full": "east",
      "wind_dir": 90,
      "wind_spd": 1
    }
  }

}
