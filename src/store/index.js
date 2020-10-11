import Vue from "vue";
import Vuex from "vuex";
import noteService from "./../_services/note.service";
import credentialsService from "./../_services/credential.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    itemArr: [],
    notes: []
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    addTo: (state, payload) => state.itemArr.push(payload),
    getNotes: state => {
      noteService
        .getNotes(credentialsService.getCredential().login)
        .then(resp => {
          state.notes = resp;
        });
    },
    addNote(state, payload) {
      return noteService
        .addNote(credentialsService.getCredential().login, payload)
        .then(resp => {
          this.commit("getNotes");
          return resp;
        });
    },
    editNote(state, payload) {
      return noteService
        .updateNote(credentialsService.getCredential().login, payload)
        .then(resp => {
          this.commit("getNotes");
          return resp;
        });
    },
    deleteNote(state, id) {
      return noteService
        .deleteNote(credentialsService.getCredential().login, id)
        .then(resp => {
          this.commit("getNotes");
          return resp;
        });
    }
  },
  actions: {
    addNote({ commit }, payload) {
      return commit("addNote", payload);
    },
    editNote({ commit }, payload) {
      return commit("editNote", payload);
    },
    deleteNote({ commit }, payload) {
      return commit("deleteNote", payload);
    }
  },
  modules: {}
});
