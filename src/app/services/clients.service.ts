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

  getId(request: any) {
    return this.http.get<clientsModel[]>(`${environment.apiUrl}/users/filter/id`,{
      params: request
    });
  }

  getFilterPeriod( request: any ) {
    return this.http.get<clientsModel[]>(`${environment.apiUrl}/users/filter/period`, {
      params: request
    });
  }

  getFilterPhone( request: any ) {
    return this.http.get<any[]>(`${environment.apiUrl}/users/filter/phone`, {
      params: request
    });
  }

  create( request: any ) {
    return this.http.post<any[]>(`${environment.apiUrl}/users`, request);
  }

  update( request: any, id: any ) {
    return this.http.put<any[]>(`${environment.apiUrl}/users/update/`+ id, request);
  }

  delete( id: any ) {
    return this.http.delete<any[]>(`${environment.apiUrl}/users/delete/`+ id);
  }

}

