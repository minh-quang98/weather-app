import { Component } from '@angular/core';
import { AuthenService } from '../services/authen/authen.service';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin/admin.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.scss'],
  providers: [MessageService]
})
export class AuthenComponent {
  username: string | any;
  password: string | any;

  constructor(private authenService: AuthenService, private router: Router, private adminService: AdminService, private messageService: MessageService,) {

  }

  submit(): void {
    this.adminService.getUsersData().then((data: any) => {
      const user = data.find((user: any) => user.name === this.username);
      if (user) {
        if (user.status === "Active") {
          if (user.role === 3) {
            this.messageService.add({ severity: 'error', summary: 'Permission', detail: 'Your account do no                                               t have permission' });
          } else {
            this.authenService.saveUser(this.username)
            this.router.navigate(["admin"]);
          }
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Your account is not active' });
        }
      } else {
        this.messageService.add({ severity: 'error', summary: 'Login Error', detail: 'Wrong Username' });
      }
    })

  }
}
