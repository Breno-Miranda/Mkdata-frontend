import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {


  @Input() data: any;

  constructor() { }

  ngOnInit(): void {}

}
