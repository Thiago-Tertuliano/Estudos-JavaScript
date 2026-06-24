export class CategoryRequest {
  constructor(public name: string, public description: string = '') {}
  validate(): void { if (!this.name) throw new Error('Category name is required'); }
}
