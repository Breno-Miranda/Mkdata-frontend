import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  clients: any;

  constructor(
    private clientsService: ClientsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.clientsService.getAll().subscribe( data => {
      this.clients = data
    });
  }
}
