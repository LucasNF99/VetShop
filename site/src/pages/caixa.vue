<template>
  <div>
    <q-toolbar class="text-primary" style="background: #000;">
      <q-toolbar-title>
        Caixa
      </q-toolbar-title>
      <q-btn label="Limpar" />
    </q-toolbar>
   <qDrawerOpen :leftDrawerOpen="leftDrawerOpen"></qDrawerOpen>
  </div>
</template>

<script>
import qDrawerOpen from '../components/qDrawerOpen';

export default {
  components: {
    qDrawerOpen,
  },
  data() {
  return {
    leftDrawerOpen: true,
  };
};
</script>
