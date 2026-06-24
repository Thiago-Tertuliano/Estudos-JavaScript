export interface IOrder { id: number; userId: number; tableId: number; status: string; total: number; createdAt: string; }
export class Order implements IOrder {
  constructor(public id: number, public userId: number, public tableId: number, public status: string, public total: number, public createdAt: string) {}
}
