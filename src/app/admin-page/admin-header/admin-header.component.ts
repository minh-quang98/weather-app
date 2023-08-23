import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen/authen.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  constructor(private router: Router, private authenService: AuthenService) {

  }

  handleClick(): void {
    this.authenService.deleteUser();
    this.router.navigate(['']);
  }
}
