<template>
  <div>

  <div class="m-cashier">
    <div class="m-cashier-input">
      <h3 class="m-cashier-title">Caixa</h3>
      <q-scroll-area style="max-height: 350px; height: 350px;">
        <q-list class="m-cashier-selected-list">
          <q-item clickable v-ripple >
            <q-item-section class="selected-list-section">
              <q-item-label>Prod 1</q-item-label>
              <q-item-label>R$19,99</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple >
            <q-item-section class="selected-list-section">
              <q-item-label>Prod 1</q-item-label>
              <q-item-label>R$19,99</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple >
            <q-item-section class="selected-list-section">
              <q-item-label>Prod 1</q-item-label>
              <q-item-label>R$19,99</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple >
            <q-item-section class="selected-list-section">
              <q-item-label>puf</q-item-label>
              <q-item-label>R$28,875</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple >
            <q-item-section class="selected-list-section">
              <q-item-label>puf</q-item-label>
              <q-item-label>R$28,875</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple >
            <q-item-section class="selected-list-section">
              <q-item-label>puf</q-item-label>
              <q-item-label>R$28,875</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple >
            <q-item-section class="selected-list-section">
              <q-item-label>puf</q-item-label>
              <q-item-label>R$28,875</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple >
            <q-item-section class="selected-list-section">
              <q-item-label>puf</q-item-label>
              <q-item-label>R$28,875</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>

        </q-list>
      </q-scroll-area>
      <div class="m-cashier-total">
        <div class="m-cashier-total-l1">
          <h4 class="m-total-text">Total:</h4>
          <span class="m-total-price">R$2.000,73</span>
        </div>
        <div class="m-cashier-total-l2">
          <q-btn class="" color="primary" label="Finalizar" no-caps />
        </div>
      </div>
    </div>
    <aside class="m-cashier-aside">
      <h5>Pesquisar:</h5>
      <q-scroll-area style="height: 300px;">
        <q-list class="m-cashier-search-list">
          <q-item @click="add_product"
          clickable v-ripple
          v-for="product in filterProducts" :key="product.id">
            <q-item-section>
              <q-item-label>{{product.name}}</q-item-label>
              <q-item-label caption><b>R${{product.price}}</b></q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
        </q-list>
        </q-scroll-area>
        <q-input
          class="m-cashier-input-search"
          outlined
          placeholder="Procurar"
          v-model="filter"
        >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </aside>
  </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import store from '../store';

export default {
  data() {
    return {
      data: this.getMedicine,
      filter: '',
      products: [
        {
          id: 1, name: 'vacinaV2', price: '22',
        },
        {
          id: 2, name: 'vacinaV4', price: '29',
        },
        {
          id: 3, name: 'cauju', price: '22',
        },
        {
          id: 4, name: 'vacinaV2', price: '22',
        },
        {
          id: 5, name: 'Teste', price: '22,93',
        },
        {
          id: 6, name: 'Manga', price: '22',
        },
      ],
    };
  },
  computed: {
    filterProducts() {
      return this.filter ? this.products.filter((product) => { /* eslint-disable-line arrow-body-style */
        return product.name.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.products;
    },
  },
  method: {
    add_product(){
      console.log(this.products.id);
    }
  },
};
</script>
