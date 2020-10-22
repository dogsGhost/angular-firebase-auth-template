import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: any;

  constructor(
    public firestore: AngularFirestore,
    public fireAuth: AngularFireAuth,
    public router: Router,
  ) { }

  authState(): any {
    const result = this.fireAuth.authState;
    console.log(result);
  }

  async signIn(email: string, password: string): Promise<any> {
    try {
      const result = await this.fireAuth.signInWithEmailAndPassword(email, password);
      // this.router.navigate(['']);
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  }

  async signUp(email: string, password: string): Promise<any> {
    try {
      const result = await this.fireAuth.createUserWithEmailAndPassword(email, password);
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  }

  async forgotPassword(email: string): Promise<any> {
    try {
      const result = this.fireAuth.sendPasswordResetEmail(email);
      console.log(result);
    } catch (err) {
      console.error(err.message);
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
