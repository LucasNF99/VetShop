<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="m-toolbar-main">
        <div class="m-first-group">
          <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
          />
          <img class="a-logo" src="~assets/images/logo.png" alt="VetShop">
          <q-toolbar-title class="a-title _main">
            VetShop
          </q-toolbar-title>
         </div>

         <div>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <btnDropDown></btnDropDown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label class="a-title _menu">Menu</q-item-label>
        <q-item>
          <q-item-section>
            <div>
              <q-btn-dropdown class="a-btn _menu" label="Estoque" no-caps>
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Videos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Articles</q-item-label>
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
              <q-btn-dropdown class="a-btn _menu" label="Exames" no-caps>
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Videos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import btnDropDown from '../components/btn-toolbar';

export default {
  name: 'MainLayout',
  components: {
    btnDropDown,
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
