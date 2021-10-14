export class Vacation {
  lastVacationDate: Date;
  constructor() {
    this.lastVacationDate = new Date();
  }
  hasVacation(): boolean {
    const today: Date = new Date();
    return today.getFullYear() - this.lastVacationDate.getFullYear() >= 1;
  }
}
