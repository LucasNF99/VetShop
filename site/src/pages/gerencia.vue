<template>
  <div class="o-estoque">
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="assignment" size="md"/>
        <div class="text-h6">Gerenciar funcionarios</div>
      </q-card-section>
      <q-card-section class="m-btn-group">
        <q-btn class="o-btn_estoque"
        align="left"
        icon="account_box"
        no-caps
        to="/gerencia-funcionario"
        label="Funcionarios"/>
      </q-card-section>
    </q-card>
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="assignment" size="md"/>
        <div class="text-h6">Gerenciar Vendas</div>
      </q-card-section>

      <q-card-section class="m-btn-group">
        <q-btn class="o-btn_estoque"
        align="left"
        icon="shopping_cart"
        no-caps
        to="/gerencia-venda"
        label="Vendas"/>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {

};
</script>
