import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  countries: any[] | undefined;

  selectedCountry: any | undefined;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getCity().then((data: any) => {
      this.countries = data;
    })
  }

  handleSelectCity(search: any): void {
    this.search.emit(search)
  }
}
