import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/auth/account.service';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
})
export class UserDropdownComponent implements OnInit {
  public user: any = {
    id: window.localStorage.getItem('meId'),
  };
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.accountService.getUser(+this.user.id).subscribe((res: any) => {
      this.user = res[0];
    });
  }

  public logout() {
    this.accountService.logout();
  }
}
