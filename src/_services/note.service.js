import { BaseHttp } from "./BaseHttp.service";

class NoteService extends BaseHttp {

  constructor() {
    super();
    this.apiPath += "/users";
  }

  getNotes(username) {
    return this.http.get(`${this.apiPath}/${username}/notes`).then(resp => {
      return resp;
    });
  }

  addNote(username, note) {
    return this.http.post(`${this.apiPath}/${username}/notes`, note).then(resp => {
      return resp;
    });
  }

  updateNote(username, note) {
    return this.http.put(`${this.apiPath}/${username}/notes/${note.id}`, note).then(resp => {
      return resp;
    });
  }

  deleteNote(username, id) {
    return this.http.delete(`${this.apiPath}/${username}/notes/${id}`).then(resp => {
      return resp;
    });
  }

}

export default new NoteService();
