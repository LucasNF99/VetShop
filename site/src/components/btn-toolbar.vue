<template>
  <q-btn-dropdown
  class="a-btn _avatar"
  color="primary"
  label="Nome"
  no-caps>
  <q-list>
    <q-item clickable v-close-popup>
      <q-item-section class="btn-drop-item">
        <q-item-label class="pd-icon"><q-icon name="settings" /></q-item-label>
        <q-item-label>Gerenciar</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-close-popup @click="logout">
      <q-item-section class="btn-drop-item">
        <q-item-label class="pd-icon"><q-icon name="power_settings_new
" /></q-item-label>
        <q-item-label>Sair</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: 'btnDropdown',
  methods: {
    logout() {
      // const response = await true/false - dialog confirm
      // if (response) this.$router.push({ name: 'login' })
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
