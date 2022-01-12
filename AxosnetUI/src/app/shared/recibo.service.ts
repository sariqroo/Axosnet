import { Injectable, Inject } from '@angular/core';
import { Recibo } from './recibo.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReciboService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:44347/api/ReciboApi'  
  formData: Recibo = new Recibo();
  list: Recibo[];

  postRecibo(){
    return this.http.post(this.baseURL, this.formData);
  }

  putRecibo(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deleteRecibo(id:number){
    return this.http.delete(`${this.baseURL}/${this.formData.id}`);
  }

  refreshList(){
   let header = new HttpHeaders()
   .set('Type-content', 'aplication/json')

    this.http.get(this.baseURL,{ headers: header}).subscribe(res => this.list = res as Recibo[]);
  }

}
