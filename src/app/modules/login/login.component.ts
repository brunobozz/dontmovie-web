import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/auth/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public fieldValidate(campo: any) {
    return (
      this.loginForm.get(campo)?.invalid && this.loginForm.get(campo)?.touched
    );
  }

  public submitDocForm() {
    if (this.loginForm.valid) {
      this.postLogin(this.loginForm.value);
    } else {
      this.toastr.error('Campos inválidos');
    }
  }

  public postLogin(user: any) {
    this.accountService
      .postLogin(user.username, user.password)
      .subscribe((res: any) => {
        if (res.length > 0) {
          this.accountService.login(res[0]);
          this.router.navigate(['/']);
        } else {
          this.toastr.error('Não rolou');
        }
      });
  }
}
