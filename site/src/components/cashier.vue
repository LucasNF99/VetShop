<template>
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
</template>

<script>
export default {
  name: 'cashier',
};
</script>
