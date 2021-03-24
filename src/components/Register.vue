<template>
  <v-app id="inspire">
    <v-main>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Account created!</v-card-title>

          <v-card-text>
            Congratulation, you can now login with your login information.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="handleLogin"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Register form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-alert v-if="message" type="error">
                  {{message}}
                </v-alert>
                <v-form @submit.prevent="handleRegister">
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="user.nickname"
                    id="nickname"
                    label="Nickname"
                    name="nickname"
                    prepend-icon="mdi-at"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="user.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>

                  <span>Already have an account? Login <router-link to="/">here.</router-link></span>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="primary">Register</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import User from '../common/models/user';

export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: '',
      dialog: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/home');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$store.dispatch('auth/register', this.user).then(
        (res) => {
          if(res.error){
             this.message = (res.error).toString()
             this.successful = false;
          }else{
            this.dialog = true;
          }
        }
      );
    },
    handleLogin() {
      this.dialog = false;
      this.$router.push('/login');
    }
  }
};
</script>