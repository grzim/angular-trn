import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {nothing} from '../../helpers/symbols';
import {KeysPipe} from '../../pipes/keys.pipe';
import {User} from '../../helpers/models/user';
import {SelectedUserService} from '../../services/selected-user.service';
import {Observable, Subject} from 'rxjs';
import {usersMock} from '../../helpers/mocks/usersMock';
import {flatMap, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  oldestUser;
  users: User[];
  keys;
  toDos: any
  isTableShown = true;
  propertyToSortBy: string;
  keyToFilterOn: string | symbol = nothing;
  valueToFilterOn: string | symbol = nothing;
  addUserSub = new Subject();
  usersName$: Observable<User[]>;
  sampleLogin: string;
  toDos$: Observable<any>;
   sampleUserToAdd = new User('a', 'b',12, 'c', 'd');
  private userToAdd: Subject<any>;
  private userToRemove: Subject<any>;
  private users$: any;
  private sampleUserToRemove = usersMock[0];
  selectedUser: Subject<User>;
  requestForData = new Subject();
  generateUser() {
  }
  constructor(private usersService: UsersService,
              private selectedUserService: SelectedUserService,
              private http: HttpClient,
              private keysPipe: KeysPipe) {
    this.userToAdd = this.usersService.userToAdd;
    this.userToRemove = this.usersService.userToRemove;
    this.users$ = this.usersService.users$;
    this.selectedUser = this.selectedUserService.selectedUser;
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    this.toDos$ = this.requestForData.pipe( flatMap(() => this.http.get(url).pipe));
  }

  // select(user) {
  //   this.selectedUserService.selectUser(user);
  // }
  // async fetchToDos() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  //   this.toDos = response.json();
  // }

  ngOnInit() {
  }
}


