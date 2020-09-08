import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }
  
  save(user: firebase.User) {
    firebase.database().ref('users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }
  get(uid:string) {
    return firebase.database().ref("users/" + uid).once("value");
  }
}
