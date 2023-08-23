import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  countries: any[] | undefined;

  selectedCountry: any | undefined;

  ngOnInit() {
    this.countries = [
      { name: 'Hà Nội', city: "HaNoi", country: "VietNam" },
      { name: 'Huế', city: "Hue", country: "VietNam" },
      { name: 'Hồ Chí Minh', city: "HoChiMinh", country: "VietNam" },
      { name: 'Hải Phòng', city: "HaiPhong", country: "VietNam" },
    ];
  }

  handleSelectCity(search: any): void {
    this.search.emit(search)
  }
}
