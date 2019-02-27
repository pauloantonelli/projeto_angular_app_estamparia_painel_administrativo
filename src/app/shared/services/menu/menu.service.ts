import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseUrlService } from '../../baseurl.service';
import { MenuInterface } from './menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private url: BaseUrlService, private http: HttpClient) { }
  getMenuAll(): any {
    return this.http.get<MenuInterface>(this.url.baseUrl() + 'menu/todos');
  }
  setMenuAll(id: string, body: any): any {
    return this.http.put<MenuInterface>(this.url.baseUrl() + 'menu/editar/' + id, body);
  }
}
