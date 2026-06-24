class ReservationResponse {
  constructor(r) { this.id = r.id; this.guestName = r.guestName; this.guestPhone = r.guestPhone; this.tableId = r.tableId; this.date = r.date; this.time = r.time; this.guests = r.guests; this.status = r.status; this.createdAt = r.createdAt; }
}
module.exports = ReservationResponse;
