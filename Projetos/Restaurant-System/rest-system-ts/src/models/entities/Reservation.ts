export interface IReservation { id: number; guestName: string; guestPhone: string; tableId: number; date: string; time: string; guests: number; status: string; createdAt: string; }
export class Reservation implements IReservation {
  constructor(public id: number, public guestName: string, public guestPhone: string, public tableId: number, public date: string, public time: string, public guests: number, public status: string, public createdAt: string) {}
}
