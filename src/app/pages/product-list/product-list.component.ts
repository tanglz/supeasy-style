import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
interface Product{
  name:string;
  price:string;
  description:string;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  constructor(private router:Router, private httpS:HttpService) { }
  toCreateProductPage(){
    this.router.navigateByUrl('index/create-product')
  }
  ngOnInit(): void {
    this.getProuducts();
  }

  getProuducts(){
    this.httpS.getAllProduct().subscribe(res=>{
      if (res['status']) {
        this.products = <Product[]>res['object'];
        
      }
    })
  }
}
