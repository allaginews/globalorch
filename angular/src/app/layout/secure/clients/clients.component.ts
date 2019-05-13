import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  globalObj: any = {};
  dtOptions: DataTables.Settings = {};

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getAllClients();
  }

  onSubmit(flag){
    let param = {
      "clientName": this.globalObj.clientName,
    }
    if(flag == 'add'){
      this._http.post('http://localhost:3000/clients',param).subscribe(data=>{
        this.globalObj.clientName = "";
        this.getAllClients();
      });
    }
    if(flag == 'edit'){
      this._http.patch('http://localhost:3000/clients/'+this.globalObj.clientId, param).subscribe(data=>{
          this.globalObj.clientId = '';
          this.globalObj.clientName = "";
          this.getAllClients();
      });
    }
    this.globalObj.editFlag = false;
  }

  getAllClients(){
    this._http.get('http://localhost:3000/clients').subscribe(data=>{
        this.globalObj.clientList = data;
    });
  }


  editClient(id, name){
    this.globalObj.clientName = name;
    this.globalObj.editFlag = true;
    this.globalObj.clientId = id;
    
  }

  deleteClient(id, name){
    
    let param = {
      "clientName": name,
      "status": 0
    }
    this._http.put('http://localhost:3000/clients/'+id, param).subscribe(data=>{
          this.globalObj.clientId = '';
          this.globalObj.clientName = "";
          this.globalObj.editFlag = false;
          this.getAllClients();
      });
  }

}
