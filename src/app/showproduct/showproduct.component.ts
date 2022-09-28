import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  products : any;
  quantity : any;
  express : any;
  productName: any;
  deliveryTime : any;

  ngOnInit(): void {
    this.allProduct();
  }

  newOrder() {
    this.http.get<any>("http://localhost:8080/newOrder?productName="+this.productName +"&quantity="+this.quantity+"&express="+this.express).subscribe(data => {
      console.log(data);
      this.deliveryTime=data;
    });
  }


  constructor(private http : HttpClient){
  }
  
  allProduct(){
    this.http.get<any>("http://localhost:8080/allProduct").subscribe(data => {
      console.log(data);
      this.products=data;
    });
  }

}
