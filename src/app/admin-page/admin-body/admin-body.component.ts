import { Component, OnInit } from '@angular/core';
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
  users!: any[];

  constructor(private adminService: AdminService) { };

  ngOnInit(): void {
    this.adminService.getUsersData().then((data) => {
      this.users = data;
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
        field: 'status',
        header: 'Status'
      }
    ]
  }
}
