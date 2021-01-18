import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { clientsModel } from '../shared/models/clients.model';

@Injectable({ providedIn: 'root' })

export class ClientsService {
  
  constructor(
    private http: HttpClient,
  ) { }
  
  getAll() {
    return this.http.get<clientsModel[]>(`${environment.apiUrl}/users`);
  }

  create( data: any ) {
    return this.http.post<any[]>(`${environment.apiUrl}/users`, data);
  }
}

