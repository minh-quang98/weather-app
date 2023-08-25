import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { StorageService } from '../storage.service';
import { City } from 'src/app/interfaces/city';

const cityKey = "CITY"

const defaultCityData: City[] = [
  { id: 1, name: 'Hà Nội', city: "HaNoi", country: "VietNam" },
  { id: 2, name: 'Huế', city: "Hue", country: "VietNam" },
  { id: 3, name: 'Hồ Chí Minh', city: "HoChiMinh", country: "VietNam" },
  { id: 4, name: 'Hải Phòng', city: "HaiPhong", country: "VietNam" },
]

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private accessKey: string = "17666ed4914b4f27a488f9373f06c76f"
  private cityData: City[] = []

  constructor(private configService: ConfigService, private storageService: StorageService) {
    this.cityData = this.storageService.getDataLocalStorage(cityKey) || defaultCityData
  }

  getDataCurrentWeather(search: any) {
    return this.configService.getData(`http://api.weatherbit.io/v2.0/current?city=${search.city}&country=${search.country}&key=${this.accessKey}`)
  }

  getDataExtendedForecast(search: any) {
    return this.configService.getData(`http://api.weatherbit.io/v2.0/forecast/daily?city=${search.city}&country=${search.country}&key=${this.accessKey}&days=7`);
  }

  getCity() {
    return Promise.resolve(this.cityData || this.storageService.getDataLocalStorage(cityKey))
  }

  saveData(): void {
    this.storageService.setData(cityKey, this.cityData)
  }

  addCity(item: City): void {
    this.cityData.push(item);
    this.saveData();
  }

  deleteCity(item: City): void {
    const index = this.cityData.indexOf(item);
    this.cityData.splice(index, 1);
    this.saveData();
  }
}
