import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() isTableShown;
  @Input() columnNames;
  @Input() rows;
  @Input() tableName;
  @Output() selectedRow = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


}
