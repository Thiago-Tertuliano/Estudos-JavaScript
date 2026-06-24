class ReservationRequest {
  constructor(body) { this.guestName = body.guestName; this.guestPhone = body.guestPhone; this.tableId = body.tableId; this.date = body.date; this.time = body.time; this.guests = body.guests; }
  validate() {
    if (!this.guestName) throw new Error('Guest name is required');
    if (!this.guestPhone) throw new Error('Guest phone is required');
    if (!this.tableId) throw new Error('Table ID is required');
    if (!this.date) throw new Error('Date is required');
    if (!this.time) throw new Error('Time is required');
    if (!this.guests || this.guests <= 0) throw new Error('Number of guests must be positive');
    return true;
  }
}
module.exports = ReservationRequest;
