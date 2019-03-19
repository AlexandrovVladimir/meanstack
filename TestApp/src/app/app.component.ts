import {Component, OnInit} from '@angular/core';
import { AuthService } from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  title = 'TestApp';
  isLogin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  isLoggednIn() {
    this.isLogin = true;
    return this.getLogin() !== null;
  }
  getLogin() {
    return localStorage.getItem("currentUser");
  }
  logout() {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

}
