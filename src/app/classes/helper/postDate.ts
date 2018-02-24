export class PostDate {
  public day: number;
  public month: string;

  constructor(day: number, month: number) {
    this.day = day;
    this.month = this.getMonthShort(month);
  }

  private getMonthShort(month: number) {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mär";
      case 4:
        return "Apr";
      case 5:
        return "Mai";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Okt";
      case 11:
        return "Nov";
      case 12:
        return "Dez";
      default:
        return "";        
    }
  }
}
