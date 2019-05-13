import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  globalObj: any = {};
  dtOptions: DataTables.Settings = {};

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getAllRegion();
  }

  onSubmit(flag){
    let param = {
      "regionName": this.globalObj.regionName,
    }
    if(flag == 'add'){
      this._http.post('http://localhost:3000/regions',param).subscribe(data=>{
        this.globalObj.regionName = "";
        this.getAllRegion();
      });
    }
    if(flag == 'edit'){
      this._http.patch('http://localhost:3000/regions/'+this.globalObj.regionId, param).subscribe(data=>{
          this.globalObj.regionId = '';
          this.globalObj.regionName = "";
          this.getAllRegion();
      });
    }
    this.globalObj.editFlag = false;
  }

  getAllRegion(){
    this._http.get('http://localhost:3000/regions').subscribe(data=>{
        this.globalObj.regionList = data;
    });
  }

  editRegion(id, name){
    this.globalObj.regionName = name;
    this.globalObj.editFlag = true;
    this.globalObj.regionId = id;
    
  }

  deleteRegion(id, name){
    
    let param = {
      "regionName": name,
      "status": 0
    }
    this._http.put('http://localhost:3000/regions/'+id, param).subscribe(data=>{
          this.globalObj.regionId = '';
          this.globalObj.regionName = "";
          this.globalObj.editFlag = false;
          this.getAllRegion();
      });
  }

}
