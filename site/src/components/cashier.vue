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

export default {
  name: 'cashier',
  data() {
    return {
      confirm: false,
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
    finish(products) {
      const paylod = {
        valor: this.calcTot,
        produtos: [
          product_id = this.products.id,
          quantidade = 4
        ],
      }
      console.log(this.products);
    }
  },
};
</script>
