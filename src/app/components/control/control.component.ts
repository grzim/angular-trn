import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {nothing} from '../../helpers/symbols';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Output() toggleTable = new EventEmitter<boolean>();
  @Output() keyToFilterOn = new EventEmitter<string | symbol>();
  @Output() valueToFilterOn = new EventEmitter<string>();
  @Output() propertyToSortBy = new EventEmitter<string>();
  @Input() propertiesToSortBy: string[];
  @Input() keys: string[];
  @Input() values: string[];
  @Input() isTableShown: boolean;
  constructor() { }

  ngOnInit() {
  }

  getKey(index) {
    return index >= 0 ? this.keys[index] : nothing;
  }
  getValue(index) {
    return index >= 0 ? this.values[index] : nothing;
  }
}
