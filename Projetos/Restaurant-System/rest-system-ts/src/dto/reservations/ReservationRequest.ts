export class ReservationRequest {
  constructor(public guestName: string, public guestPhone: string, public tableId: number, public date: string, public time: string, public guests: number) {}
  validate(): void {
    if (!this.guestName) throw new Error('Guest name is required');
    if (!this.guestPhone) throw new Error('Guest phone is required');
    if (!this.tableId) throw new Error('Table ID is required');
    if (!this.date) throw new Error('Date is required');
    if (!this.time) throw new Error('Time is required');
    if (!this.guests || this.guests <= 0) throw new Error('Number of guests must be positive');
  }
}
