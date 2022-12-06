import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //to get data from api
  fetchProducts = () =>
  {
    return this.http.get("http://localhost:8080/view")
  }
  // to send data to api
  addProducts=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
}
