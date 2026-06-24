export interface ITable { id: number; number: number; capacity: number; status: string; createdAt: string; }
export class Table implements ITable {
  constructor(public id: number, public number: number, public capacity: number, public status: string, public createdAt: string) {}
}
