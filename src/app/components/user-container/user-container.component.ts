import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {nothing} from '../../helpers/symbols';
import {KeysPipe} from '../../pipes/keys.pipe';
import {User} from '../../helpers/models/user';
import {SelectedUserService} from '../../services/selected-user.service';


@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  oldestUser;
  users: User[];
  keys;
  toDos = [{}];
  isTableShown = true;
  propertyToSortBy: string;
  keyToFilterOn: string | symbol = nothing;
  valueToFilterOn: string | symbol = nothing;

  constructor(private usersService: UsersService,
              private selectedUserService: SelectedUserService,
              private keysPipe: KeysPipe) {
    this.users = this.usersService.getUsers();
    this.oldestUser = this.usersService.getOldest();
    this.keys = keysPipe.transform(this.users[0]);
    this.selectedUserService.selectUser(this.users[0]);
  }

  select(user) {
    this.selectedUserService.selectUser(user);
  }
  async fetchToDos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    this.toDos = await response.json();
  }

  ngOnInit() {
  }
}


