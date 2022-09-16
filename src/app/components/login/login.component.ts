import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/']);
      return;
    }
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  handleClickSubmit() {
    this.authService
      .login(this.form.getRawValue())
      .subscribe((res: any) => {
        const accessToken = res.data.access_token;
        AuthInterceptor.accessToken = accessToken;
        localStorage.setItem(
          'accessToken',
          JSON.stringify(accessToken)
        );
        this.router.navigate(['/']);
      });
  }
}
