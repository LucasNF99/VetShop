<template>
  <div class="o-estoque">
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="assignment" size="md"/>
        <div class="text-h6">Consultar estoque</div>
      </q-card-section>

      <q-card-section class="m-btn-group">
        <q-btn class="o-btn_estoque"
        align="left"
        icon="healing"
        no-caps
        to="/estoque-medicamento"
        label="Medicamentos"/>
          <q-btn
          no-caps
          align="left"
          icon="sports_baseball"
          class="o-btn_estoque -flex2"
          to="/estoque-produto"
          label="Produtos"
          />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {

};
</script>
