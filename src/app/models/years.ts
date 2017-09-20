 const years: {value : string, label: string}[] = [
    {value: '1995', label: '1995'},
    {value: '2005', label: '2005'},
    {value: '2015', label: '2015'}
  ];

  export class Years {
    constructor(){}
    public static getYears(): {value : string, label: string}[]{
        return years;
    }
}