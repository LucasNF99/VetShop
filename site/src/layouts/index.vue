<template>
  <q-layout view="lHh Lpr lFf" class="bg_image">
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
          <router-link :to="{ name: 'home' }" class="m-home-link">
            <img class="a-logo" src="~assets/images/logo.png" alt="VetShop">
            <q-toolbar-title class="a-title _main">
              VetShop
            </q-toolbar-title>
          </router-link>
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
      <qDrawerOpen></qDrawerOpen>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="m-index-footer">
      <nav>
        <ul class="m-footer-list">
          <li class="m-footer-list_item">
            <a href="#" class="m-footer-list-link">Home</a>
          </li>
          <li class="m-footer-list_item">
            <a href="/#/caixa" class="m-footer-list-link">Caixa</a>
          </li>
          <li class="m-footer-list_item">
            <a href="/#/gerencia" class="m-footer-list-link">Gerenciar</a>
          </li>
        </ul>
      </nav>
      <p class="a-footer-text">Todos os direitos reservados.</p>
    </q-footer>
  </q-layout>
</template>

<script>
import btnDropDown from '../components/btn-toolbar';
import qDrawerOpen from '../components/qDrawerOpen';

export default {
  name: 'MainLayout',
  components: {
    btnDropDown,
    qDrawerOpen,
  },
  data() {
    return {
      leftDrawerOpen: true,
    };
  },
};
</script>
