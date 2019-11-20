import { Injectable } from '@angular/core';
import {usersMock} from '../helpers/mocks/usersMock';
import {User} from '../helpers/models/user';
import {unique} from '../helpers/functions/transformations';
import {combineLatest, from, merge, Observable, of, Subject} from 'rxjs';
import {map, scan, startWith, tap} from 'rxjs/operators';


@Injectable()
export class UsersService {

  userToAdd = new Subject();
  userToRemove = new Subject();
  users$: Observable<User[]>;
  professions$: Observable<string[]>;
  constructor() {
    const addUser = user => users => [...users, user];
    const removeUser = ({login}) => users => users.filter(user => user.login !== login);
    const mockedUsers$ = from(usersMock);
    const userToAdd$ = merge(this.userToAdd, mockedUsers$)
      .pipe(map(addUser));
    const userToRemove$ = this.userToRemove
      .pipe(map(removeUser));

    this.users$ = merge(userToRemove$, userToAdd$).pipe(
      scan((users: User[], f: (a: any) => User[]) => f(users), []));

    this.professions$ = this.users$.pipe(
      map(users => users.map(({professionName}) => professionName)),
      map(unique));
  }

  // getByLoginName(loginName) {
  //   this.users.find(({login}) => login === loginName);
  // }
  // addUser(user: User) {
  //   this.users = [...this.users, user];
  // }
  // getUsers() {
  //   return this.users;
  // }
  // getProfessions() {
  //   return unique(this.users.map(({professionName}) => professionName));
  // }
  // getUsersByAge(): {[prop: number]: Array<User> } {
  //   return this.users.reduce((acc, curr) => ({
  //     ...acc,
  //     [curr.age]: acc[curr.age] ? [...acc[curr.age], curr] : [curr]
  //   }), {});
  // }
  // getMature() {
  //   return this.users.find(({age}) => age >= 18);
  // }
  // getOldest() {
  //   return [...this.users].sort((a, b) => b.age - a.age)[0];
  // }
}

