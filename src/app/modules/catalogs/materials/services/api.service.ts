import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  postMaterial(data: any) {
    return this.http.post<any>(this.baseUrl + "/api/material/create", data);
  }

  updateMaterial(id: Number, data: any) {
    return this.http.put<any>(this.baseUrl + "/api/material/" + id, data);
  }

  getMaterial() {
    return this.http.get<any>(this.baseUrl + "/api/material/list");
  }

  getMaterialById(id: Number) {
    return this.http.get<any>(this.baseUrl + "/api/material/" + id);
  }

  deleteMaterialById(id: Number) {
    return this.http.delete<any>(this.baseUrl + "/api/material/" + id);
  }
}
