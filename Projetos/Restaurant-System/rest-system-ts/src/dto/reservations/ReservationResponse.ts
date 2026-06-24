export class ReservationResponse {
  constructor(public id: number, public guestName: string, public guestPhone: string, public tableId: number, public date: string, public time: string, public guests: number, public status: string, public createdAt: string) {}
}
