import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
// import { User } from '../../models/users.model';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  loading = false;

  constructor( private formBuilder: FormBuilder, private loginService: AuthService,
               private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // указываем поля и валидаторы к ним
      username: ['vova', Validators.compose([Validators.required, Validators.minLength(3)])], password: ['123', Validators.required]
    })
  }

  // get сразу возвращает результат, и его не надо возвращать => f.username.errors
  get f() { return this.loginForm.controls }
  // console.log('get f() this.loginForm.controls', this.loginForm.controls);

  onSubmit(form) {
    this.submitted = true;
    if (this.loginForm.invalid) {

      console.log('invalid');
      return;
    }

    const values = form.value;

    this.loginService.login(values.username, values.password)
      .subscribe(
        result => {
          console.log('loginService data', result);
          this.router.navigate(['/']);
        },
        error => {
          console.log('error', error);
          this.loading = false;
        });
  }
  sendLogin(username: string) {
    localStorage.setItem('currentUser', username);
  }
  getLogin() {
    return localStorage.getItem('currentUser');
  }
  isLoggednIn() {
    return this.getLogin() !== null;
  }
}
