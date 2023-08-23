import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getUsersData() {
    return Promise.resolve([
      {
        id: 1,
        name: 'Kaname Ichigo',
        status: 'Active',
      },
      {
        id: 2,
        name: 'John',
        status: 'Inactive',
      },
      {
        id: 3,
        name: 'Jane',
        status: 'Inactive',
      }
    ])
  }
}
