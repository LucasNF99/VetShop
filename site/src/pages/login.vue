<template>
  <div class="m-container-login">
    <q-form class="o-login-form">
      <div class="o-login-fields">
        <h1 class="a-login_title">Login</h1>
        <q-input
        v-model="email"
        color="secondary"
        class="text-secondary"
        label="E-mail" />
        <q-input
        v-model="password"
        :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
        </template>
        </q-input>
        <q-btn
        class="a-btn"
        color="secondary"
        text-color="white"
        label="Login" no-caps />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      isPwd: true,
      password: '',
      email: '',
    };
  },
};
</script>
