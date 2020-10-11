<template>
  <div class="container" data-app>
    <v-toolbar-title><h2>Notes</h2></v-toolbar-title>
    <div class="cards-box">
      <v-card
        class="card"
        v-for="(item, index) in notes"
        :key="index"
        min-width="700"
        outlined
      >
        <v-badge
          class="tips"
          v-if="item.isPriority"
          bordered
          left
          tile
        ></v-badge>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              {{ item.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              item.createDate | date
            }}</v-list-item-subtitle>

            <div class="">
              {{ item.description }}
            </div>
          </v-list-item-content>

          <div class="">
            <v-btn class="mx-2" fab small color="cyan" @click="editNote(item)">
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>

            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="error"
              @click="deleteNote(item.id)"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
          </div>
        </v-list-item>

        <v-card-actions> </v-card-actions>
      </v-card>
    </div>

    <v-btn class="mx-2 add-note" fab dark small color="indigo" @click="addNote">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

    <add-note-modal
      v-if="dialog"
      :visible="dialog"
      @close="close"
      :note="noteForEdit"
    ></add-note-modal>
  </div>
</template>

<script>
import store from "./../store";
import AddNoteModal from "./../components/add-note.modal";

export default {
  name: "Notes",
  data: () => ({
    dialog: false,
    noteForEdit: null
  }),
  components: {
    AddNoteModal
  },
  computed: {
    notes: () => store.state.notes
  },
  created: () => {
    store.commit("getNotes");
  },
  methods: {
    close() {
      this.dialog = false;
      this.noteForEdit = null;
    },
    addNote() {
      this.dialog = true;
    },
    editNote(note) {
      this.noteForEdit = note;
      this.dialog = true;
    },
    deleteNote(id) {
      store.dispatch("deleteNote", id);
    }
  }
};
</script>

<style scoped lang="scss">
.cards-box {
  padding: 20px;
  display: flex;
  /*height: 100%;*/
  /*justify-content: center;*/
  align-items: center;
  flex-direction: column;

  .card {
    margin-bottom: 20px;
    text-align: left;
  }
}

.add-note {
  position: fixed;

  right: 400px;
  bottom: 20px;
}

.tips {
  position: absolute;
  top: 5px;
  left: 5px;
}
</style>
