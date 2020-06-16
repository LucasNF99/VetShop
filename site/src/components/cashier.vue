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
        <q-btn class="" color="primary" label="Finalizar" no-caps />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'cashier',
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
      window.location.reload();
    },
  },
};
</script>
