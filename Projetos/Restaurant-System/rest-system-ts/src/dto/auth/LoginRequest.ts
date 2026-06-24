export class LoginRequest {
  constructor(public email: string, public password: string) {}
  validate(): void {
    if (!this.email) throw new Error('Email is required');
    if (!this.password) throw new Error('Password is required');
  }
}
