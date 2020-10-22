import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.signUp(this.email, this.password);
  }
}
