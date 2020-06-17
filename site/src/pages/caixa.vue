<template>
  <div>
  <div class="m-cashier">
    <cashier :products="products"/>
    <aside class="m-cashier-aside">
      <h5>Pesquisar:</h5>
      <q-scroll-area style="height: 300px;">
        <q-list class="m-cashier-search-list">
          <div v-for="product in filterProducts" :key="product.medicineId">
            <q-item @click="addProduct(product)"
            clickable v-ripple
            >
              <q-item-section>
                <q-item-label class="a-list-label">{{product.nome}}</q-item-label>
                <q-item-label caption class="a-list-label_price">
                  <b>R${{product.precoVenda}}</b>
                </q-item-label>
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
      geral: [],
      products: [],
      buyList: [],
    };
  },
  computed: {
    ...mapGetters('medicine', ['getMedicine']),
    ...mapGetters('product', ['getProduct']),

    filterProducts() {
      return this.filter ? this.geral.filter((produto) => { /* eslint-disable-line arrow-body-style */
        return produto.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.geral;
    },
  },
  methods: {
    addProduct(produto){
      this.products.push(produto);
      // this.arrProduct(produto.id);
    },

    arrProduct(id) {
      let newProduct = null;

      if (this.buyList.length > 0) {
        this.buyList.forEach((el) => {
          if (el.id === id) {
            el.qtde += 1;
          } else {
            newProduct = id;
          }
        });
      } else {
        newProduct = id;
        console.log(newProduct);
        this.buyList.push({ id: newProduct, qtde: 1 });
        newProduct = null;
      }
    },
  },

  async mounted() {
    await store().dispatch('medicine/getMedicine');
    await store().dispatch('product/getProduct');
    this.geral = this.getMedicine.concat(this.getProduct);
  },
};
</script>
