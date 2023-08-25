import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/city';
import { UserService } from './../../services/user/user.service';
import { AdminService } from 'src/app/services/admin/admin.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-admin-city-body',
  templateUrl: './admin-city-body.component.html',
  styleUrls: ['./admin-city-body.component.scss']
})
export class AdminCityBodyComponent implements OnInit {
  cols!: Column[];
  citys!: City[];
  visible: boolean = false;
  city!: string;
  country!: string;
  currentUser: any

  constructor(private userService: UserService, private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getUsersData().then((data) => {
      this.currentUser = data.find(user => user.name === this.adminService.getCurrentUser());
    })

    this.userService.getCity().then((data: any) => {
      this.citys = data;
    })

    this.cols = [
      {
        field: 'id',
        header: 'No.'
      },
      {
        field: 'name',
        header: 'Name'
      },
      {
        field: 'city',
        header: 'City'
      },
      {
        field: 'country',
        header: 'Country'
      },
    ]
  }

  showDialog(): void {
    this.visible = true;
  }

  addCity(): void {
    const dataCity = {
      id: this.citys.length + 1,
      name: this.city,
      city: this.city,
      country: this.country
    }
    this.userService.addCity(dataCity)
    this.visible = false;
  }

  deleteCity(item: any): void {
    this.userService.deleteCity(item)
  }
}
