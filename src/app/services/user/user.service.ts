import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private accessKey: string = "17666ed4914b4f27a488f9373f06c76f"
  constructor(private configService: ConfigService) { }

  getDataCurrentWeather(search: any) {
    return this.configService.getData(`http://api.weatherbit.io/v2.0/current?city=${search.city}&country=${search.country}&key=${this.accessKey}`)
  }

  getDataExtendedForecast(search: any) {
    return this.configService.getData(`http://api.weatherbit.io/v2.0/forecast/daily?city=${search.city}&country=${search.country}&key=${this.accessKey}&days=7`);
  }
}
