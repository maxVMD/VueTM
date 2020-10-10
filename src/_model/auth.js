export class AuthCredentials {
  login;
  name;
  email;

  constructor(login, name, email) {
    this.login = login;
    this.name = name;
    this.email = email;
  }
}
