export class MenuItemRequest {
  constructor(public name: string, public price: number, public categoryId?: number, public description: string = '') {}
  validate(): void {
    if (!this.name) throw new Error('Name is required');
    if (this.price == null || this.price < 0) throw new Error('Price must be non-negative');
  }
}
