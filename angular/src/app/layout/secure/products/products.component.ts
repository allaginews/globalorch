import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  globalObj: any = {};
  dtOptions: DataTables.Settings = {};

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getAllProducts();
  }

  onSubmit(flag){
    let param = {
      "productName": this.globalObj.productName,
    }
    if(flag == 'add'){
      this._http.post('http://localhost:3000/products',param).subscribe(data=>{
        this.globalObj.productName = "";
        this.getAllProducts();
      });
    }
    if(flag == 'edit'){
      this._http.patch('http://localhost:3000/products/'+this.globalObj.productId, param).subscribe(data=>{
          this.globalObj.productId = '';
          this.globalObj.productName = "";
          this.getAllProducts();
      });
    }
    this.globalObj.editFlag = false;
  }

  getAllProducts(){
    this._http.get('http://localhost:3000/products').subscribe(data=>{
        this.globalObj.productList = data;
    });
  }


  editProduct(id, name){
    this.globalObj.productName = name;
    this.globalObj.editFlag = true;
    this.globalObj.productId = id;
    
  }

  deleteProduct(id, name){
    
    let param = {
      "productName": name,
      "status": 0
    }
    this._http.put('http://localhost:3000/products/'+id, param).subscribe(data=>{
          this.globalObj.productId = '';
          this.globalObj.productName = "";
          this.globalObj.editFlag = false;
          this.getAllProducts();
      });
  }


}
