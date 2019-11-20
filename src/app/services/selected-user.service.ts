import { Injectable } from '@angular/core';
import {User} from '../helpers/models/user';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {

  selectedUser = new Subject<User>();
  selectedUser$: Observable<User>;
  constructor() {
    this.selectedUser$ = this.selectedUser.asObservable();
  }
}
