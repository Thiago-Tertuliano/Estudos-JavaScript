export interface IUser {
  id: number; name: string; email: string; password: string; role: string; createdAt: string;
}
export class User implements IUser {
  constructor(public id: number, public name: string, public email: string, public password: string, public role: string, public createdAt: string) {}
}
