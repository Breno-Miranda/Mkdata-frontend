import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {


  @Input() data: any;
  @Input() client: any;
  @Input() clientsPhones: any;


  @Output() onHandlerFilterPhonesEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  _onHandlerFilterPhones(value: any) {
    this.onHandlerFilterPhonesEvent.emit(value);
  }


}
