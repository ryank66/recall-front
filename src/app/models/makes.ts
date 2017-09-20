 
 const makes: {value : string, label: string}[] = [
    {value: 'Chevrolet', label: 'Chevrolet'},
    {value: 'Dodge', label: 'Dodge'},
    {value: 'Ford', label: 'Ford'}
  ];

  export class Makes {
    constructor(){}
    public static getMakes(): {value : string, label: string}[]{
        return makes;
    }
}