import { Component } from '@angular/core';
import { AuthenService } from '../services/authen/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.scss']
})
export class AuthenComponent {
  username: string | any;
  password: string | any;

  constructor(private authenService: AuthenService, private router: Router) {

  }

  submit(): void {
    this.authenService.saveUser(this.username)
    this.router.navigate(["admin"]);
  }
}
