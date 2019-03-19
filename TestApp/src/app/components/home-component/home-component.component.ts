import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.styl']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendLogin(username: string) {
    localStorage.setItem("currentUser", username);
  }
  getLogin() {
    return localStorage.getItem("currentUser");
  }
  isLoggedIn() {
    return this.getLogin() !== null;
  }

}
