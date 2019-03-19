import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router, Route} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.styl']
})
export class RegistreComponent implements OnInit {

  registreForm: FormGroup;
  submited = false;
  loading = false;
  registreErrors: String;


  constructor(private formBuilder: FormBuilder, private loginService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.registreForm = this.formBuilder.group({
      // указываем поля и валидаторы к ним
      username: ['vova', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['123', Validators.required],
      gender: ['']
    });
  }

  get f() {return this.registreForm.controls; }

  onSubmit(form2: NgForm) {
    console.log(form2);
    this.registreErrors = '';
    this.loginService.register(form2)
      .subscribe(res => {

        this.submited = true;
        if (res.errmsg !== undefined) {
          this.registreErrors = res.errmsg;

        } else {
          this.router.navigate(['']);
        }

      });


    // stop here if form is invalid
    if (this.registreForm.invalid) {
      return;
    }

    this.loading = true;

  }
}
