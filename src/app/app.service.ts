import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Vehicle} from './models/vehicle';
import {Recall} from './models/recall';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(public _http: Http) {
  }

  //Hit the restful service url to grab vehicle list. Map the response to a json object. Map the json object to the vehicle object. Return the result as an observable
  getVehicleList(make : string, year : string) : Observable<Array<Vehicle>>{ 
    return this._http.get('http://localhost:8080/recall/resources/service/vehicle-list/'+make+'/'+year).map((res: Response) => {
      return res.json().Results.map(vehicle => new Vehicle(vehicle));
    });
  }

 //Hit the restful service url to grab recall list. Map the response to a json object. Map the json object to the recall object. Return the result as an observable
 getRecallList(model : string, make : string, year: string) : Observable<Array<Recall>>{
    return this._http.get('http://localhost:8080/recall/resources/service/recall-list/'+model.replace(/ /g,'')+'/'+make+'/'+year).map((res: Response) => {
      return res.json().Results.map(recall => new Recall(recall));
    });
  }

}



