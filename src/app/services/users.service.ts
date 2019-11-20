import { Injectable } from '@angular/core';
import {usersMock} from '../helpers/mocks/usersMock';
import {User} from '../helpers/models/user';
import {unique} from '../helpers/functions/transformations';


@Injectable()
export class UsersService {

  private users: User[];
  constructor() {
    this.users = usersMock;
  }
  getByLoginName(loginName) {
    this.users.find(({login}) => login === loginName);
  }
  addUser(user: User) {
    this.users = [...this.users, user];
  }
  getUsers() {
    return this.users;
  }
  getProfessions() {
    return unique(this.users.map(({professionName}) => professionName));
  }
  getUsersByAge(): {[prop: number]: Array<User> } {
    return this.users.reduce((acc, curr) => ({
      ...acc,
      [curr.age]: acc[curr.age] ? [...acc[curr.age], curr] : [curr]
    }), {});
  }
  getMature() {
    return this.users.find(({age}) => age >= 18);
  }
  getOldest() {
    return [...this.users].sort((a, b) => b.age - a.age)[0];
  }
}

