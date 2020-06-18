<template>
  <div class="o-estoque">
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="assignment_ind" size="md"/>
        <div class="text-h6">Clientes/Pacientes</div>
      </q-card-section>

      <q-card-section class="m-btn-group">
        <q-btn class="o-btn_estoque"
        align="left"
        icon="pets"
        no-caps
        to="/listar-paciente"
        label="Pacientes"/>
        <q-btn class="o-btn_estoque"
        align="left"
        icon="face"
        no-caps
        to="/listar-clientes"
        label="Clientes"/>
      </q-card-section>

    </q-card>
    <q-card class="m-card-nav">
      <q-card-section class="a-card-title">
        <q-icon name="today" size="md"/>
        <div class="text-h6">Consultas/Prontuarios</div>
      </q-card-section>

      <q-card-section class="m-btn-group">
        <q-btn class="o-btn_estoque"
        align="left"
        icon="healing"
        no-caps
        to="/listar-consultas"
        label="Consultas"/>
        <q-btn class="o-btn_estoque"
        align="left"
        icon="assignment"
        no-caps
        to="/listar-prontuarios"
        label="Prontuarios"/>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {

};
</script>
