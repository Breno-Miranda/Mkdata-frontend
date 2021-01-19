import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  client: any;
  clients: any;
  clientsPhones: any;

  constructor(
    private clientsService: ClientsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.clientsService.getAll().subscribe( data => {
      this.clients = data
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
