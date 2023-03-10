import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  postCompany(data: any) {
    data.roles = data.roles.toString();
    return this.http.post<any>(this.baseUrl + "/api/company/create", data);
  }

  updateCompany(id: Number, data: any) {
    data.roles = data.roles.toString();
    return this.http.put<any>(this.baseUrl + "/api/company/" + id, data);
  }

  getCompany() {
    return this.http.get<any>(this.baseUrl + "/api/company/list");
  }

  getCompanyById(id: Number) {
    return this.http.get<any>(this.baseUrl + "/api/company/" + id);
  }

  getBuyer() {
    return this.http.get<any>(this.baseUrl + "/api/company/roles/buyer");
  }

  getSeller() {
    return this.http.get<any>(this.baseUrl + "/api/company/roles/seller");
  }

  deleteCompanyById(id: Number) {
    return this.http.delete<any>(this.baseUrl + "/api/company/" + id);
  }
}
