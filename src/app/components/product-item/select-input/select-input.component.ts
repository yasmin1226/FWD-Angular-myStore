import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
})
export class SelectInputComponent implements OnInit {
  @Input() qty: number = 1;
  @Output() selectQty = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  modelChangeFn(e: any) {
    this.selectQty.emit(e);
  }
}
