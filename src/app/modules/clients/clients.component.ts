import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import Swal from 'sweetalert2'

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
    this.onHadlerLoad();
  }

  async onHadlerLoad(){
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

  async onHadlerDelete(item: any){

    Swal.fire({
      title: 'Deseja excluir este contato?',
      text: 'Click no botão de confirmar para finalizar está ação.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir agora!',
      cancelButtonText: 'Não, Obrigado.'
    }).then(async (result) => {
      if (result.value) {
        await this.clientsService.delete(item.id).subscribe( data => {
          this.onHadlerLoad();
          Swal.fire(
            'Deletado!',
            'O cliente foi excluido com sucesso.',
            'success'
          )
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {}
    })

  }

}
