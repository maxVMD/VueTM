<template>
  <v-app>
    <v-row justify="center">
      <v-dialog hide-overlay v-model="show" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ getModalName }} Note</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Name Note*"
                      v-model="form.name"
                      :rules="rules.nameRules"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="form.description"
                      :rules="rules.descriptionRules"
                      label="Description Note*"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-checkbox
                      v-model="form.isPriority"
                      label="is priority"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">
              Close
            </v-btn>
            <v-btn :disabled="!valid" color="blue darken-1" text @click="save">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
import store from "./../store";
import { Note } from "../_model/Note";

export default {
  props: ["visible", "note"],
  name: "AddNoteModal",
  data: () => ({
    modalName: "",
    valid: true,
    form: {
      name: "",
      description: "",
      isPriority: ""
    },
    rules: {
      nameRules: [v => !!v || "name is required"],
      descriptionRules: [v => !!v || "description is required"]
    }
  }),
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    },
    getModalName: function() {
      return this.note ? "Edit" : "Add";
    }
  },
  created: function() {
    this.setForm();
  },
  methods: {
    setForm: function() {
      if (this.note) {
        this.form.name = this.note.name;
        this.form.description = this.note.description;
        this.form.isPriority = this.note.isPriority;
      }
    },
    close() {
      this.$emit("close");
    },
    save() {
      console.log(this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        if (this.note) {
          this.updateNote();
        } else {
          this.createNote();
        }
      }
    },
    createNote() {
      const note = new Note(
        this.form.name,
        this.form.description,
        this.form.isPriority
      );
      store.dispatch("addNote", note).then(() => {
        this.close();
      });
    },
    updateNote() {
      const updatedNote = this.note;
      updatedNote.name = this.form.name;
      updatedNote.description = this.form.description;
      updatedNote.isPriority = this.form.isPriority;

      store.dispatch("editNote", updatedNote).then(() => {
        this.close();
      });
    }
  }
};
</script>

<style scoped></style>
