<template>
  <div class="o-estoque">
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="assignment_ind" size="md"/>
        <div class="text-h6">Clientes</div>
      </q-card-section>

      <q-card-section class="m-btn-group">
        <q-btn class="o-btn_estoque"
        align="left"
        icon="list"
        no-caps
        to="/listar-clientes"
        label="Listar clientes"/>
      </q-card-section>
    </q-card>
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="today" size="md"/>
        <div class="text-h6">Consulta</div>
      </q-card-section>

      <q-card-section class="m-btn-group">
        <q-btn class="o-btn_estoque"
        align="left"
        icon="list"
        no-caps
        to=""
        label="Listar consultas"/>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {

};
</script>
