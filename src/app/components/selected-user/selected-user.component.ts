import { Component, OnInit } from '@angular/core';
import {User} from '../../helpers/models/user';
import {SelectedUserService} from '../../services/selected-user.service';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/operators';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  selectedUser$: Observable<User | {}>;
  constructor(private selectedUserService: SelectedUserService) {
    this.selectedUser$ = this.selectedUserService.selectedUser.pipe(startWith({}));
  }

  ngOnInit() {
  }
}
