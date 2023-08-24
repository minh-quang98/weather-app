import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() dataSearch: any

  dataCurrentWeather: any

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getDataCurrentWeather(this.dataSearch).subscribe(
      res => {
        this.dataCurrentWeather = res.data[0]
      }
    )
  }

}
