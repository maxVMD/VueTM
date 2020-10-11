import { BaseHttp } from "./BaseHttp.service";

class CredentialService extends BaseHttp {
  constructor() {
    super();
  }

  #credentials = JSON.parse(sessionStorage.getItem("AUTH"));

  getCredential() {
    return this.#credentials;
  }

  isAuthenticated() {
    return !!this.#credentials;
  }

  setCredentials(credentials) {
    if (credentials) {
      this.#credentials = credentials;
      sessionStorage.setItem("AUTH", JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem("AUTH");
    }
  }

  logIn(data) {
    return this.http.post(`${this.apiPath}/login`, data);
  }
}

export default new CredentialService();
