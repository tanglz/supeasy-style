import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  base_url='http://127.0.0.1:8080/api/';
  constructor(private http:HttpClient) { }

  register(params:any){
    return this.http.post(this.base_url+'user/register_store',params);
  }
  login(params:any){
    return this.http.post(this.base_url+'user/login',params);

  }
  getAllProduct(){
    return this.http.get(this.base_url+'product/all');
  }

  createProduct(params:any){
    return this.http.post(this.base_url+'product/add',params);

  }
  getStore(params:string){
    return this.http.get(this.base_url+'store/flyer?storeId='+params);

  }
}
