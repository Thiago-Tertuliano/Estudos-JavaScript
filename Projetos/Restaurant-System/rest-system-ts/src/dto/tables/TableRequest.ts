export class TableRequest {
  constructor(public number: number, public capacity: number) {}
  validate(): void {
    if (this.number == null) throw new Error('Table number is required');
    if (this.capacity == null || this.capacity <= 0) throw new Error('Capacity must be positive');
  }
}
