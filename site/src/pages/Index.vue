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
    <!--<aside>
      <div class="o-index-right">
        <h4>Avisos</h4>
        <q-list class="list-right">
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Produto em falta: </q-item-label>
              <q-item-label caption>Caption</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Produto em falta: </q-item-label>
              <q-item-label caption>Caption</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Produto em falta: </q-item-label>
              <q-item-label caption>Caption</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Produto em falta: </q-item-label>
              <q-item-label caption>Caption</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Produto em falta: </q-item-label>
              <q-item-label caption>Caption</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Produto em falta: </q-item-label>
              <q-item-label caption>Caption</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Produto em falta: </q-item-label>
              <q-item-label caption>Caption</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>

        </q-list>
      </div>
    </aside> -->
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      check1: false,
      check2: false,
      check3: false,
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
        {
          name: '13:00',
          hora: '16:30',
          paciente: 'Safe',
        },
        {
          name: '13:00',
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
