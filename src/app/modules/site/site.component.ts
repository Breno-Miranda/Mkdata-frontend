import { Component, OnInit } from '@angular/core';


import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  clientsRecents: any;
  clientsOld: any;

  constructor(
    private clientsService: ClientsService
  ) { }

  async ngOnInit(): Promise<void> {

    // recents customers
    await this.clientsService.getFilterPeriod({start: new Date(), end: new Date(), limit: 5}).subscribe( data => {
      this.clientsRecents = data
    });

    // old customers
    await this.clientsService.getFilterPeriod({start:'2021-01-01', end: new Date(), limit: 5}).subscribe( data => {
      this.clientsOld = data
    });

  }

}
