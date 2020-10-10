class CredentialService {

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

}

export default new CredentialService();
