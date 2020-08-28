import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(public afAuth: AngularFireAuth) { }

  getUser(){
    return this.afAuth.authState

  }
  logout(){
    return this.afAuth.signOut()
  }
  
}

