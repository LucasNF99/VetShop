<template>
  <q-list>
    <q-item-label class="a-title _menu">Menu</q-item-label>
    <q-separator/>
    <q-item>
      <q-item-section>
        <q-btn to='/'
        icon="home"
        class="a-btn _menu"
        label="Home"
        no-caps />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-btn to='caixa'
        icon="store"
        class="a-btn _menu"
        label="Caixa"
        no-caps />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
          <q-btn to="estoque"
          icon="shopping_basket"
          class="a-btn _menu"
          label="Estoque"
          no-caps
          />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
          <q-btn to="cliente"
          icon="perm_identity"
          class="a-btn _menu"
          label="Clientes / Consultas"
          no-caps />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
          <q-btn to="/gerencia"
          icon="settings"
          class="a-btn _menu"
          label="Gerenciar"
          no-caps />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'qDrawerOpen',
};
</script>
