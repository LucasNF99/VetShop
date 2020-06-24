<template>
  <q-btn-dropdown
  class="a-btn _avatar"
  color="primary"
  :label="$q.cookies.get('vet_nome')"
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
import store from '../store';

export default {
  name: 'btnDropdown',
  methods: {
    async logout() {
      const status = await store().dispatch('auth/logout');
      if (status) this.$router.push({ name: 'login' });
    },
  },
};
</script>
