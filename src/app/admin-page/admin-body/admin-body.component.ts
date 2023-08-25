import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/interfaces/admin';
import { AdminService } from 'src/app/services/admin/admin.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.scss']
})
export class AdminBodyComponent implements OnInit {
  cols!: Column[];
  users!: Admin[];
  currentUser: any
  visible: boolean = false;
  userName!: string;
  role!: string;

  constructor(private adminService: AdminService) { };

  ngOnInit(): void {
    this.adminService.getUsersData().then((data) => {
      this.users = data;
      this.currentUser = this.users.find(user => user.name === this.adminService.getCurrentUser());
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
        field: 'role',
        header: 'Role'
      },
      {
        field: 'status',
        header: 'Status'
      },
    ]
  }

  showDialog() {
    this.visible = true;
  }

  addUser() {
    const dataUser = {
      id: this.users.length + 1,
      name: this.userName,
      role: parseInt(this.role),
      status: 'Active'
    }
    this.adminService.addUser(dataUser)
    this.visible = false
  }

  deleteUser(item: any) {
    this.adminService.deleteUser(item)
  }

  onChangeStatus(item: any) {
    this.adminService.updateUser(item, {status: item.status === 'Inactive' ? 'Active' : 'Inactive'})
  }
}
