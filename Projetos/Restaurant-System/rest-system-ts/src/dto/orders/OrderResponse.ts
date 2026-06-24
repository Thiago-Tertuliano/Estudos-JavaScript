export class OrderResponse {
  constructor(public id: number, public userId: number, public tableId: number, public status: string, public total: number, public createdAt: string, public items: any[] = []) {}
}
