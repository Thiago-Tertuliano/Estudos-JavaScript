export class AuthResponse {
  public user: { id: number; name: string; email: string; role: string };
  public token: string;
  constructor(user: any, token: string) {
    this.user = { id: user.id, name: user.name, email: user.email, role: user.role };
    this.token = token;
  }
}
