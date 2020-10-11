export class User {
  name;
  age;
  login;
  email;
  password;
  projects;
  notes;
  constructor(
    name,
    login,
    email,
    password,
    age = null,
    projects = [],
    notes = []
  ) {
    this.name = name;
    this.email = email;
    this.login = login;
    this.age = age;
    this.password = password;
    this.projects = projects;
    this.notes = notes;
  }
}
