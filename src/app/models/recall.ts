export class Recall {
  public Manufacturer : string;
  public NHTSACampaignNumber : string;
  public ReportReceivedDate: string;
  public Component: string;
  public Summary: string;
  public Conequence: string;
  public Remedy: string;
  public Notes: string;
  public ModelYear: string;
  public Make: string;
  public Model: string;


  constructor(data: any) {
    this.Manufacturer = data.Manufacturer || '';
    this.NHTSACampaignNumber = data.NHTSACampaignNumber || '';
    this.ReportReceivedDate = data.ReportReceivedDate || '';
    this.Component = data.Component || '';
    this.Summary = data.Summary || '';
    this.Conequence = data.Conequence || '';
    this.Remedy = data.Remedy || '';
    this.Notes = data.Notes || '';
    this.ModelYear = data.ModelYear || '';
    this.Make = data.Make || '';
    this.Model = data.Model || '';
  }
}
