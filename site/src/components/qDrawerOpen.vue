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
            <div>
              <q-btn-dropdown icon="shopping_basket" class="a-btn _menu" label="Estoque" no-caps>
                <q-list>
                  <q-item clickable v-close-popup to="/estoque-medicamento">
                    <q-item-section>
                      <q-item-label>Medicamentos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Brinquedos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Alimentos</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <div>
              <q-btn-dropdown icon="perm_identity" class="a-btn _menu" label="Clientes" no-caps>
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Videos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Articles</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
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
