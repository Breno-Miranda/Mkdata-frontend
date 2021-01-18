import { Component, OnInit } from '@angular/core';


import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

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
