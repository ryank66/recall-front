import { Component, OnInit, EventEmitter } from '@angular/core';
import {AppService} from './app.service';
import {Vehicle} from './models/vehicle';
import {Recall} from './models/recall';
import {Years} from './models/years';
import {Makes} from './models/makes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public sortedVehicles: Array<Vehicle>;
  public vehicles: Array<Vehicle>;
  public recalls: Array<Recall>;
  public currentVehicle: Vehicle;
  public recallHeader : string = 'Recall List - No Model Selected';
  private _selectedYear : string;
  private _selectedMake : string;
  public years = Years.getYears();
  public makes = Makes.getMakes();
  
  constructor(private _serviceApp: AppService) { }

  ngOnInit() {
  }

  set selectedYear(selectedYear: string) { //check if year filter is selected
    this._selectedYear = selectedYear;
    this.checkFilter(); 
  }

  get selectedYear(): string {
    return this._selectedYear;
  }

  set selectedMake(selectedMake: string) { //check if make filter is selected
    this._selectedMake = selectedMake;
    this.checkFilter(); 
  }

  get selectedMake(): string {
    return this._selectedMake;
  }

  checkFilter(){ //bring back vehicle list if both year and make are selected
    if(this.selectedYear != null && this.selectedMake != null ){
      this.getVehicleList();
    }
  }

  setSelectedVehicle(event){ //bring back recall list based on make/model/year selection
    this.currentVehicle = event.value['0']; //grab the currently selected vehicle object
    this.recallHeader = 'Recall List - '+ this.selectedYear +' '+ this.selectedMake +' '+ this.currentVehicle.Model_Name;
    this.getRecallList();
  }

  getVehicleList(){ //hit the service to grab vehicle list. subscribe to the observable and set vehicles equal to the result sent back from the server.
    this._serviceApp.getVehicleList(this.selectedMake, this.selectedYear).subscribe(
      vehicles => {
        this.vehicles = vehicles;
        this.sortedVehicles = this.sortVehicles(this.vehicles);
      }
    )
  }

  getRecallList(){ //hit the service to grab recall list. subscribe to the observable and set recalls equal to the result sent back from the server.
    this._serviceApp.getRecallList(this.currentVehicle.Model_Name, this.selectedMake, this.selectedYear).subscribe(
      recalls => {
        this.recalls = recalls;
      }
    )
  }

  sortVehicles(vehicles : Array<Vehicle>){ //sort the order of the array based on the model name
    let sortedVehicleArray : Array<Vehicle> = null;
    sortedVehicleArray = vehicles.sort((s1, s2)=>{
      if (s1.Model_Name > s2.Model_Name) {
        return 1;
      }
      if (s1.Model_Name < s2.Model_Name) {
        return -1;
      }
      return 0;
    });
    return sortedVehicleArray;
  }
}
