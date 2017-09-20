export class Vehicle {
  public Make_ID : string;
  public Model_ID : string;
  public Make_Name: string;
  public Model_Name: string;


  constructor(data: any) {
    this.Make_ID = data.Make_ID || '';
    this.Model_ID = data.Model_ID || '';
    this.Make_Name = data.Make_Name || '';
    this.Model_Name = data.Model_Name || '';
  }
}
