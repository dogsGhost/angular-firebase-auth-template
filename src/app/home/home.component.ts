import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.isLoggedIn = this.authService.authState;
  }

}
