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
        to="/estoque-produto-medicamento"
        label="Medicamento"/>
          <q-btn
          no-caps
          align="left"
          icon="sports_baseball"
          class="o-btn_estoque -flex2"
          label="Brinquedo"
          />
          <q-btn
            no-caps
            align="left"
            icon="local_dining"
            class="o-btn_estoque -flex2"
            label="Comida"
          />
          <q-btn
            no-caps
            icon="category"
            align="left"
            class="a-btn o-btn_estoque -flex2"
            label="Acessório"
          />
      </q-card-section>
    </q-card>
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="assignment" size="md"/>
        <div class="text-h6">Dados</div>
      </q-card-section>
      <q-card-section>
        <p>
          Produto mais vendido:
          <q-icon size="md" name="arrow_upward" style="color: green;"></q-icon>
          <span style="display: inline;">25%</span>
        </p>
         <p style="display: inline;">Ração Golden Special Sabor Frango e Carne para Cães Adultos</p>
      </q-card-section>
      <q-card-section>
        <p>
          Produto menos vendido:
          <q-icon style="color: red;" size="md" name="arrow_downward"></q-icon>
          <span style="display: inline;">15%</span>
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {

};
</script>
