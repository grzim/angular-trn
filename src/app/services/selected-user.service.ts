import { Injectable } from '@angular/core';
import {User} from '../helpers/models/user';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {

  selectedUser: User;
  constructor() {}
  selectUser(user: User) {
    console.log(user);
    this.selectedUser = user;
  }
}
