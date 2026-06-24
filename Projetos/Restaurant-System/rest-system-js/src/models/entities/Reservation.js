class Reservation {
  constructor(data) {
    this.id = data.id; this.guestName = data.guestName; this.guestPhone = data.guestPhone;
    this.tableId = data.tableId; this.date = data.date; this.time = data.time;
    this.guests = data.guests; this.status = data.status; this.createdAt = data.createdAt;
  }
}
module.exports = Reservation;
