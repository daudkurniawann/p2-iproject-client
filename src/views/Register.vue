<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create your account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit"
export default {
  name: "Register",
  data() {
    return {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      password: null,
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {

    }
  }
}
</script>

<style lang="scss">
.register {
  h2 {
    max-width: 350px;
  }
}
</style>