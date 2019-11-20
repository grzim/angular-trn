import { Component, OnInit } from '@angular/core';
import {User} from '../../helpers/models/user';
import {SelectedUserService} from '../../services/selected-user.service';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  selectedUser: User;
  constructor(private selectedUserService: SelectedUserService) {
    this.selectedUser = this.selectedUserService.selectedUser;
  }

  ngOnInit() {
  }

}
