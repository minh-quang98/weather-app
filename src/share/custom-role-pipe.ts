import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'customRole'})
export class CustomRolePipe implements PipeTransform {
  transform(role: number) {
      switch (role) {
        case 1:
          return 'Super Admin';
        case 2:
          return 'Admin';
        case 3:
          return 'User';
        default:
          return '';
      }
  }
}
