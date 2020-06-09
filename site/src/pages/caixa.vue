<template>
  <div>
  <div class="m-cashier">
    <cashier/>
    <aside class="m-cashier-aside">
      <h5>Pesquisar:</h5>
      <q-scroll-area style="height: 300px;">
        <q-list class="m-cashier-search-list">
          <div v-for="product in filterProducts" :key="product.medicineId">
            <q-item @click="add_product"
            clickable v-ripple
            >
              <q-item-section>
                <q-item-label>{{product.nome}}</q-item-label>
                <q-item-label caption><b>R${{product.precoVenda}}</b></q-item-label>
              </q-item-section>
            </q-item>
            <q-separator dark/>
          </div>
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
import cashier from '../components/cashier'

export default {
  components: {
    cashier,
  },
  data() {
    return {
      filter: '',
      produto: {},
    };
  },
  computed: {
    ...mapGetters('medicine', ['getMedicine']),

    filterProducts() {
      return this.filter ? this.getMedicine.filter((produto) => { /* eslint-disable-line arrow-body-style */
        return produto.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getMedicine;
    },
  },
  method: {
    add_product(){
      console.log(this.products.id);
    }
  },

  async mounted() {
    await store().dispatch('medicine/getMedicine');
  },
};
</script>
