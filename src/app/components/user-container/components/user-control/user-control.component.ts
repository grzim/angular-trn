import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../helpers/models/user';
import {nothing} from '../../../../helpers/symbols';
import {KeysPipe} from '../../../../pipes/keys.pipe';

type UserKey = string | symbol;
type UserValue = any;

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {
  @Output() propertyToSortBy = new EventEmitter<string>();
  @Output() toggleTable = new EventEmitter<boolean>();
  @Output() keyIndexToFilterOn = new EventEmitter<UserKey>();
  @Output() valueIndexToFilterOn = new EventEmitter<UserValue>();
  @Input() users: User[];
  @Input() isTableShown: boolean;

  localKeyToFilterOn: UserKey = nothing;
  localValueToFilterOn: UserValue = nothing;

  constructor(private keysPipe: KeysPipe) {
  }
  setKeyToFilterOn(index) {
    const key = this.keysPipe.transform(this.users)[index] || nothing;
    this.keyIndexToFilterOn.emit(key);
    this.localKeyToFilterOn = key;
  }
  setValueToFilterOn(index) {
    this.localValueToFilterOn = this.users[index] ? this.users[index][this.localKeyToFilterOn] : nothing;
    this.valueIndexToFilterOn.emit(this.localValueToFilterOn);
  }
  setPropertyToSortBy(prop) {
    this.propertyToSortBy.emit(prop);
  }

  ngOnInit() {}
}
