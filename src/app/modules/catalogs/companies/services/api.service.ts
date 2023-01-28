import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postCompany(data: any) {
    data.roles = data.roles.toString();
    return this.http.post<any>("http://localhost:3000/companies/", data);
  }

  updateCompany(id: Number, data: any) {
    data.roles = data.roles.toString();
    return this.http.put<any>("http://localhost:3000/companies/" + id, data);
  }

  getCompany() {
    return this.http.get<any>("http://localhost:3000/companies/");
  }

  getCompanyById(id: Number) {
    return this.http.get<any>("http://localhost:3000/companies/" + id);
  }

  deleteCompanyById(id: Number) {
    return this.http.delete<any>("http://localhost:3000/companies/" + id);
  }
}
