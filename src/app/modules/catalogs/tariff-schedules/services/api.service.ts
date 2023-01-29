import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postTariff(data: any) {
    return this.http.post<any>("http://localhost:3000/tariffs/", data);
  }

  updateTariff(id: Number, data: any) {
    return this.http.put<any>("http://localhost:3000/tariffs/" + id, data);
  }

  getTariff() {
    return this.http.get<any>("http://localhost:3000/tariffs/");
  }

  getTariffById(id: Number) {
    return this.http.get<any>("http://localhost:3000/tariffs/" + id);
  }

  deleteTariffById(id: Number) {
    return this.http.delete<any>("http://localhost:3000/tariffs/" + id);
  }
}
