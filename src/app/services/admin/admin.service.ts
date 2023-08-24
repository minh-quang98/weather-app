import { Injectable } from '@angular/core';
import { Admin } from 'src/app/interfaces/admin';
import { StorageService } from '../storage.service';

const adminKey = 'Admin'
const userStorageKey = "User";

const defaultAdminData: Admin[] = [
  {
    id: 1,
    name: 'Kaname',
    role: 1,
    status: 'Active',
  },
  {
    id: 2,
    name: 'John',
    role: 2,
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Jane',
    role: 3,
    status: 'Inactive',
  }
]

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminData: Admin[] = []
  constructor(private storageService: StorageService) {
    this.adminData = this.storageService.getDataLocalStorage(adminKey) || defaultAdminData
  }

  getUsersData() {
    return Promise.resolve(this.adminData)
  }

  getCurrentUser() {
    return this.storageService.getDataLocalStorage(userStorageKey)
  }

  saveList(): void {
    this.storageService.setData(adminKey, this.adminData)
  }

  addUser(item: Admin): void {
    this.adminData.push(item);
    this.saveList();
  }

  updateUser(item: Admin, changes: any): void {
    const index = this.adminData.indexOf(item);
    this.adminData[index] = {...item, ...changes};
    this.saveList();
  }

  deleteUser(item: Admin): void {
    const index = this.adminData.indexOf(item);
    this.adminData.splice(index, 1);
    this.saveList();
  }
}
