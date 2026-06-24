export class RegisterRequest {
  constructor(public name: string, public email: string, public password: string, public role: string = 'WAITER') {}
  validate(): void {
    if (!this.name) throw new Error('Name is required');
    if (!this.email) throw new Error('Email is required');
    if (!this.password || this.password.length < 6) throw new Error('Password must be at least 6 characters');
  }
}
