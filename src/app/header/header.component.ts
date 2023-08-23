import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../services/authen/authen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private authenService: AuthenService) {

  }

  handleClick(): void {
    const user = this.authenService.getUser();
    if (user && user !== "") {
      this.router.navigate(['admin'])
    } else {
      this.router.navigate(['login'])
    }

  }
}
