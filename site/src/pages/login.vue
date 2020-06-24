<template>
  <div class="m-container-login">
    <q-form class="o-login-form" @submit.prevent="submit">
      <div class="o-login-fields">
        <h1 class="a-login_title">Login</h1>
        <q-input
        v-model="email"
        color="secondary"
        class="a-input_login"
        label="E-mail"
        :rules="[val => !!val || 'Campo obrigatorio!']"
        ref="email"/>
        <q-input
        v-model="password"
        color="secondary"
        label="Senha"
        class="a-input_login"
        :rules="[val => !!val || 'Campo obrigatorio!']"
        ref="password"
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
        class="a-btn_external"
        text-color="white"
        label="Login" no-caps
        type="submit"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'login',
  data() {
    return {
      isPwd: true,
      password: '',
      email: '',
    };
  },
  methods: {
    async submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      const response = await store().dispatch('auth/login', payload);
      if (response.status) this.$router.push({ name: 'home' });
      else {
        this.$q.notify({
          color: 'negative',
          message: 'E-mail ou senha incorretos',
          icon: 'report_problem',
        });
      }
    },
  },
};
</script>
