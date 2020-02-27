<template>
  <div class="o-estoque">
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="assignment" size="md"/>
        <div class="text-h6">Consultar estoque</div>
      </q-card-section>

      <q-card-section class="m-btn-group">
        <q-btn class="o-btn_estoque"
        icon="healing"
        no-caps
        to="/estoque-produto-medicamento"
        label="Medicamento"/>
          <q-btn
          no-caps
          icon="sports_baseball"
          class="o-btn_estoque -flex2"
          label="Brinquedo"
          />
          <q-btn
            no-caps
            icon="local_dining"
            class="o-btn_estoque -flex2"
            label="Comida"
          />
          <q-btn
            no-caps

            class="a-btn o-btn_estoque -flex2"
            label="Acessório"
          />
      </q-card-section>
    </q-card>
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="assignment" size="md"/>
        <div class="text-h6">Items vendidos</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {

};
</script>
