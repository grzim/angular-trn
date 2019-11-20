import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../helpers/models/user';
import {nothing} from '../../../../helpers/symbols';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  @Input() users: User[];
  @Input() keyToFilterOn: keyof User| symbol = nothing;
  @Input() valueToFilterOn: string;
  @Input() propertyToSortBy: keyof User;
  @Input() isTableShown;

  constructor() { }

  ngOnInit() {
  }

}
