import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = undefined;
  isLoading = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.authState().subscribe(user => {
      if (user) {
        this.user = user;
      }

      this.isLoading = false;
    });
  }

  logout(): void {
    this.isLoading = true;
    this.authService.signOut().then(res => {
      // no response if successful
      if (!res) {
        this.user = undefined;
      }
      this.isLoading = false;
    });
  }

}
