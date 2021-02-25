import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
interface Product{
  name:string;
  price:string;
  description:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  storeId:string;
  storeName:string;
  address:string;
  phone:string;
  productList:Product[];

  constructor(private route:ActivatedRoute,private httpS:HttpService) { }

  ngOnInit(): void {
    this.storeId = this.route.snapshot.params['id']
    this.httpS.getStore(this.storeId).subscribe(res=>{
      console.log(res);
      if (res['status']) {
        this.storeName=res['object']['userInfo']['storeName'];
        this.address=res['object']['userInfo']['address'];
        this.phone=res['object']['userInfo']['phone'];

        this.productList=<Product[]>res['object']['productInfoList'];

      }
      
    })
  }
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

}
