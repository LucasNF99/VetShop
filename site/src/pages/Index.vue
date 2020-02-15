<template>
  <q-page class="o-index">
    <q-table class="m-index-table"
    style="overflow-y: auto"
      title="Agenda"
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination.sync="pagination"
    />
    <aside class="o-index-right">
      <q-card class="m-index-card">
        <q-card-section>
          Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Assumenda aut totam facere architecto numquam
          sit nemo autem culpa saepe, cumque cupiditate, eius
          excepturi. Obcaecati eligendi at soluta illum voluptatem accusamus?
        </q-card-section>
      </q-card>
      <q-card class="m-index-card">
        <q-card-section>
          Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Assumenda aut totam facere architecto numquam
          sit nemo autem culpa saepe, cumque cupiditate, eius
          excepturi. Obcaecati eligendi at soluta illum voluptatem accusamus?
        </q-card-section>
      </q-card>
    </aside>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      pagination: {
        rowsPerPage: 7,
      },
      tab: 'mails',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Hora',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
        },
        {
          name: 'paciente', align: 'left', label: 'Paciente', field: 'paciente',
        },
        {
          name: 'responsavel', align: 'left', label: 'Responsavel', field: 'paciente',
        },
      ],
      data: [
        {
          name: '08:00',
          hora: '13:00',
          paciente: 'José',
        },
        {
          name: '09:00',
          hora: '16:30',
          paciente: 'Safe',
        },
        {
          name: '10:00',
          hora: '16:30',
          paciente: 'Safe',
        },
        {
          name: '11:00',
          hora: '16:30',
          paciente: 'Safe',
        },
        {
          name: '12:00',
          hora: '16:30',
          paciente: 'Safe',
        },
        {
          name: '13:00',
          hora: '16:30',
          paciente: 'Safe',
        },


      ],
    };
  },
};
</script>
