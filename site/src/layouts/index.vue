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
    <qDrawerOpen :leftDrawerOpen="leftDrawerOpen"></qDrawerOpen>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="m-index-footer">
      <nav>
        <ul class="m-footer-list">
          <li class="m-footer-list_item">
            <a href="" class="m-footer-list-link">Home</a>
          </li>
          <li class="m-footer-list_item">
            <a href="" class="m-footer-list-link">Caixa</a>
          </li>
          <li class="m-footer-list_item">
            <a href="" class="m-footer-list-link">Configurações</a>
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
