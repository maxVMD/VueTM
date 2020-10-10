<template>
    <v-app>
        <div class="login-box">

            <div class="login-form">
                <div class="login-ttl">
                    {{title}}
                </div>
                <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                >
                    <v-text-field
                            v-model="name"
                            :counter="10"
                            :rules="nameRules"
                            label="Name"
                            required
                    ></v-text-field>

                    <v-text-field
                            v-model="login"
                            :counter="10"
                            :rules="loginRules"
                            label="Login"
                            required
                    ></v-text-field>

                    <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                    ></v-text-field>

                    <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="validate"
                    >
                        Sign in
                    </v-btn>


                </v-form>

            </div>
        </div>
    </v-app>

</template>

<script>
  // eslint-disable-next-line
  import { AuthCredentials } from "../_model/auth";
  import credentialService from "../_services/credential.service"

  export default {
    name: "Login",
    data: () => ({
      title: "Welcome to TaskManager",
      valid: true,
      login: "",
      loginRules: [
        v => !!v || "login is required"
      ],
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    }),

    methods: {
      validate() {
        // this.$refs.form.reset();
        if (this.$refs.form.validate()) {
          const auth = new AuthCredentials(this.login, this.name, this.email);
          console.log(auth);
          credentialService.setCredentials(auth);
          this.$router.push('/');
        }
      }
    }
  };
</script>

<style scoped lang="scss">

    .login-box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .login-form {
        width: 500px;
        height: 500px;

    }

    .login-ttl {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }

</style>

