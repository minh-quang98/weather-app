import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private configService: ConfigService) { }

  // getDataExtendedForecast(): any {
  //   this.configService.getData('http://api.weatherbit.io/v2.0/forecast/daily?city=HaNoi&country=VietNam&key=c649d58a96ab4dfaaf38263600589fee&days=7').toPromise().then(
  //     data => {
  //       return data.data
  //     }
  //   )
  // }

  async getDataExtendedForecast() {
    return await this.configService.getData('http://api.weatherbit.io/v2.0/forecast/daily?city=HaNoi&country=VietNam&key=c649d58a96ab4dfaaf38263600589fee&days=7').toPromise();
  }
}
