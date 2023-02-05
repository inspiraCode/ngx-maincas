import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  postTariff(data: any) {
    return this.http.post<any>(this.baseUrl + "/api/tariff-schedule/create", data);
  }

  updateTariff(id: Number, data: any) {
    return this.http.put<any>(this.baseUrl + "/api/tariff-schedule/" + id, data);
  }

  getTariff() {
    return this.http.get<any>(this.baseUrl + "/api/tariff-schedule/list");
  }

  getTariffById(id: Number) {
    return this.http.get<any>(this.baseUrl + "/api/tariff-schedule/" + id);
  }

  deleteTariffById(id: Number) {
    return this.http.delete<any>(this.baseUrl + "/api/tariff-schedule/" + id);
  }
}
