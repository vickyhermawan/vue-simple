<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-alert v-if="message" type="error">
                  {{ message }}
                </v-alert>
                <v-form @submit.prevent="handleLogin">
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
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
                  <span
                    >Don't have an account? Register
                    <router-link to="/register">here.</router-link></span
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="primary">Login</v-btn>
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
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/home');
    }
  },
  methods: {
    handleLogin() {
      if (this.user.email && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then((res) => {
          if (res.error) {
            this.loading = false;
            this.message = res.error.toString();
          }else{
            this.$router.push('/home');
          }
        });
      }
      else if(!this.user.email && !this.user.password)
        this.message = 'Please fill the form';
      else if(!this.user.password)
        this.message = 'Please fill password';
      else
        this.message = 'Please fill email';
    },
  },
};
</script>
