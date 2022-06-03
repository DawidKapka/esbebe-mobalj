import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-datetime',
  templateUrl: './input-datetime.component.html',
  styleUrls: ['./input-datetime.component.scss']
})
export class InputDatetimeComponent implements OnInit {

  @Input() type: 'date' | 'time' = 'date';

  constructor() { }

  ngOnInit(): void {
  }

}
