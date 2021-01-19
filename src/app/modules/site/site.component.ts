import { Component, OnInit } from '@angular/core';


import { ClientsService } from 'src/app/services/clients.service';


import * as moment from 'moment';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  clientsRecents: any;
  clientsOld: any;
  clientsPhones: any;
  client: any;

  constructor(
    private clientsService: ClientsService
  ) { }

  async ngOnInit(): Promise<void> {
    // recents customers
    await this.clientsService.getFilterPeriod({start: moment().format('YYYY-MM-DD'), end: moment().add(1, 'M').format('YYYY-MM-DD'), limit: 5}).subscribe( data => {
      this.clientsRecents = data
    });

    // old customers
    await this.clientsService.getFilterPeriod({start: moment().subtract(1, 'M').format('YYYY-MM-DD') , end: moment().format('YYYY-MM-DD'), limit: 5}).subscribe( data => {
      this.clientsOld = data
    });
  }

  async onHandlerFilterPhones(item: any){

    // add object
      this.client = item;
      // filter phones
      await this.clientsService.getFilterPhone({id:item.id,  limit: 999}).subscribe( data => {
        this.clientsPhones = data
      });
  }

}
