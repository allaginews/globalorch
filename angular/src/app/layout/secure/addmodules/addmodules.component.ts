import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addmodules',
  templateUrl: './addmodules.component.html',
  styleUrls: ['./addmodules.component.css']
})
export class AddmodulesComponent implements OnInit {

  globalObj: any = {};
  dtOptions: DataTables.Settings = {};

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.globalObj.formFields = [];
    this.getAllClients();
    this.getAllRegion();
  }

  assignToUrl(){
    let  moduleName = this.globalObj.moduleName.replace(/[ .*+?^${}()_|[\]\\]/g, "-");
      this.globalObj.moduleUrl = moduleName.toLowerCase();
  }

  getAllClients(){
    this._http.get('http://localhost:3000/clients').subscribe(data=>{
        this.globalObj.clientList = data;
    });
  }

  getAllRegion(){
    this._http.get('http://localhost:3000/regions').subscribe(data=>{
        this.globalObj.regionList = data;
    });
  }



  allFormFields(){
    this.globalObj.formFields = [
      {id: 'email', value:"Email", isCheck: false, validation:[
        {id: 'required', value:"Required", isCheck: false},
        {id: 'unique', value:"Unique", isCheck: false},
      ]},
      {id: 'mobile', value:"Mobile", isCheck: false,validation:[
        {id: 'required', value:"Required", isCheck: false},
        {id: 'unique', value:"Unique", isCheck: false},
      ]}
    ]
    if(!this.globalObj.selectedRegion){
      this.globalObj.formFieldsFlag = false;
      alert('Please select any region');
      return;
    }
    this.globalObj.formFieldsFlag = true;

  }

  isCheck(index,val){
    this.globalObj.formFields[index].isCheck = !this.globalObj.formFields[index].isCheck;
    
    if(!this.globalObj.formFields[index].isCheck){
      for(let k in this.globalObj.formFields[index].validation){
        this.globalObj.formFields[index].validation[k].isCheck = false;
      }
    }
  }

  validCheck(index, validIndex){
    this.globalObj.formFields[index].validation[validIndex].isCheck = !this.globalObj.formFields[index].validation[validIndex].isCheck
  }

}
