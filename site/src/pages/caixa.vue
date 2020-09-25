<template>
  <div>
  <div class="m-cashier">
    <cashier :products="products" @limpa="limpa"/>
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
import product from '../store/module/product';

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
    limpa() {
      this.geral = [],
      this.geral = (this.getMedicine.map(i => ({ nome: i.nome, quantidade: i.quantidade, precoVenda: i.precoVenda, id: i.id, tipo: 'medicamentos' }))).
      concat(this.getProduct.map(i => ({ nome: i.nome,quantidade: i.quantidade, precoVenda: i.precoVenda, id: i.id, tipo: 'produtos' })))
    }
  },
  methods: {
    // addProduct(produto){
    //   if(this.buyList.length === 0) {
    //     this.products.push(produto);
    //     this.arrProduct(produto.id);
    //   } else {
    //     for (let i = 0; i < this.buyList.length; i++) {
    //       if(this.buyList[i].id === produto.id) {
    //         if(this.buyList[i].qtde < produto.quantidade) {
    //           this.products.push(produto);
    //           this.arrProduct(produto.id);
    //         }
    //       }
    //     }

    //   }
      // this.products.push(produto);
      // this.arrProduct(produto.id);
    //},

    // arrProduct(id) {
    //   let newProduct = null;

    //   if (this.buyList.length > 0) {
    //     for (let i = 0; i < this.buyList.length; i += 1) {
    //       if (this.buyList[i].id === id) {
    //         this.buyList[i].qtde += 1;
    //         return true;
    //       } else {
    //         newProduct = id;
    //       }
    //     }
    //   } else {
    //     newProduct = id;
    //   }
    //   if (newProduct !== null) this.buyList.push({ id: newProduct, qtde: 1 });
    // }
    addProduct(product){
      if(product.quantidade > 0){
        this.products.push(product)
        product.quantidade -= 1
      }
    }
  },

  async mounted() {
    await store().dispatch('medicine/getMedicine');
    await store().dispatch('product/getProduct');
    // console.log(this.getMedicine)
    // console.log(this.getProduct)
    this.geral = (this.getMedicine.map(i => ({ nome: i.nome, quantidade: i.quantidade, precoVenda: i.precoVenda, id: i.id, tipo: 'medicamentos' }))).
    concat(this.getProduct.map(i => ({ nome: i.nome,quantidade: i.quantidade, precoVenda: i.precoVenda, id: i.id, tipo: 'produtos' })))
    // console.log(this.geral);
  },
};
</script>
