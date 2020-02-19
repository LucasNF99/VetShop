<template>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label class="a-title _menu">Menu</q-item-label>
        <q-separator/>
        <q-item>
          <q-item-section>
            <q-btn icon="store" class="a-btn _menu" label="Caixa" no-caps />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
              <q-btn to="estoque"
              icon="shopping_basket"
              class="a-btn _menu"
              label="Estoque"
              no-caps />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
              <q-btn icon="perm_identity" class="a-btn _menu" label="Clientes" no-caps />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</template>

<script>
export default {
  name: 'qDrawerOpen',
  props: {
    leftDrawerOpen: Boolean,
  },
};
</script>
