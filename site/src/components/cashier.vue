<template>
  <div class="m-cashier-input">
    <h3 class="m-cashier-title">Caixa</h3>
    <q-scroll-area style="max-height: 350px; height: 350px;">
      <q-list class="m-cashier-selected-list" v-if="products.length > 0">
        <div v-for="(product, index) in products" v-bind:key="index">
          <q-item clickable v-ripple>
            <q-item-section class="selected-list-section">
              <q-item-label class="a-list-label">{{product.nome}}</q-item-label>
              <q-item-label class="a-list-label">R$ {{product.precoVenda}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
        </div>
      </q-list>
      <div v-else class="m-cashier-selected-list">
        <p class="selected-list-section q-pa-md"><b>Nenhum produto selecionado!</b></p>
      </div>
    </q-scroll-area>
    <div class="m-cashier-total">
      <div class="m-cashier-total-l1">
        <h4 class="m-total-text">Total:</h4>
        <span class="m-total-price">R$ {{calcTot}}</span>
      </div>
      <div class="m-cashier-total-l2">
        <q-btn class="" color="primary" label="Limpar" @click="limpa" no-caps />
        <q-btn class="" color="primary" label="Finalizar" no-caps @click="confirm = true" />
      </div>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <span class="q-ml-sm">Deseja realmente finalizar venda?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Não" color="primary" v-close-popup />
            <q-btn flat label="Sim" color="primary" @click="finish()"
            v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import store from '../store';
import product from '../store/module/product';

export default {
  name: 'cashier',
  data() {
    return {
      confirm: false,
      usuario: this.getUser,
    };
  },
  props: {
    products: Array,
  },
  computed: {
    calcTot() {
      let valor = 0.00;
      this.products.forEach((element) => {
        valor += element.precoVenda;
      });
      return valor.toFixed(2);
    },
  },
  methods: {
    limpa() {
      this.$emit('limpa');
    },
    async finish(products) {
      let produtos = [];
      let medicamentos = [];
      for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].tipo == 'produtos'){
          produtos.push(
            {
              id: this.products[i].id,
              quantidade: 1,
            }
          )
        } else {
          medicamentos.push(
            {
              id: this.products[i].id,
              quantidade: 1,
            }
          )
        }
      }
      // this.products.forEach(i => {
      //   [i.tipo].push({id: i.id, quantidade: 1});
      // });
      const payload = {
        valor: Number(this.calcTot),
        usuario_id: 10,
        produtos,
        medicamentos,
      }
      console.log(payload);
      const response = await store().dispatch('sale/createSale', payload);
      this.limpa();
    }
  },
  async mounted() {
    await store().dispatch('user/getUser');
  }
};
</script>
