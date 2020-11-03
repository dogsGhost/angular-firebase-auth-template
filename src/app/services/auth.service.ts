import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: any;

  constructor(
    public fireAuth: AngularFireAuth,
    public router: Router,
  ) { }

  authState(): Observable<firebase.User> {
    return this.fireAuth.authState;
  }

  async signIn(email: string, password: string): Promise<any> {
    try {
      const result = await this.fireAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (err) {
      return err;
    }
  }

  async signUp(email: string, password: string): Promise<any> {
    try {
      const result = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      console.log(result);
      return result;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }

  async forgotPassword(email: string): Promise<any> {
    try {
      const result = this.fireAuth.sendPasswordResetEmail(email);
      console.log(result);
      return result;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }

  async signOut(): Promise<any> {
    try {
      this.fireAuth.signOut();
    } catch (err) {
      console.error(err.message);
    }
  }
}
