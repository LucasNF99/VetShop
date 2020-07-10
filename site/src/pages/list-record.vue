<template>
  <div class="o-produto">
    <q-btn no-caps icon="add" class="a-btn _add" @click="openUpdate()">
      Adicionar prontuario
    </q-btn>
    <q-table
        :data="filterPatients"
        :columns="columns"
        row-key="name"
        class="m-table-produto"
        virtual-scroll
        :pagination.sync="pagination"
      >
      <template v-slot:top>
        <p class="m-table-produto_title">Prontuarios</p>
        <q-space />

        <q-input
          placeholder="Procurar"
          v-model="filter"
        >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      </template>
      <template class="m-table-template" v-slot:body="props">
        <q-tr :props="props">
          <q-td key="laudo" :props="props">
            {{ props.row.laudo }}
          </q-td>
          <q-td key="exame" :props="props">
            <div>
              {{ props.row.exame }}
            </div>
          </q-td>
          <q-td key="prescricao" :props="props">
            {{ props.row.prescricao }}
          </q-td>
          <q-td key="queixas" :props="props">
            {{ props.row.queixas }}
          </q-td>
          <q-td key="consult" :props="props">
            {{ props.row.Consult.data}}
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit"
            @click="openUpdate(
            props.row.laudo,
            props.row.Consult.data,
            props.row.exame,
            props.row.prescricao,
            props.row.queixas,
            props.row.id,
            )">
              <q-tooltip>Editar item</q-tooltip>
            </q-btn>
            <q-btn @click="confirm = true"  size="md" round icon="delete">
              <q-tooltip>Deletar item</q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <span class="q-ml-sm">Deseja realmente excluir este prontuario?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Não" color="primary" v-close-popup />
              <q-btn flat label="Sim" color="primary" @click="deleteItem(props.row.id)"
              v-close-popup/>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </template>
    </q-table>
    <updateModalMed
    :updateModal="updateModal"
    :isNew="isNew"
    :prontuario="prontuario"
    @closeModal="closeModal"
    />
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import updateModalMed from '../components/modal-record';
import store from '../store';

const columns = [
  {
    name: 'laudo', align: 'left', label: 'Laudo', field: 'laudo',
  },
  {
    name: 'exame', align: 'left', label: 'Exame', field: 'exame',
  },
  {
    name: 'prescricao', align: 'left', label: 'Prescrição', field: 'prescricao',
  },
  {
    name: 'queixas', align: 'left', label: 'Queixas', field: 'queixas',
  },
    {
    name: 'consult', align: 'left', label: 'Consulta', field: 'consult',
  },
];

export default {
  components: {
    updateModalMed,
  },
  data() {
    return {
      filter: '',
      data: this.getRecord,
      columns,
      updateModal: false,
      consultas:[],
      prontuario: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
      confirm: false,
    };
  },
  methods: {
    openUpdate(laudo, data, exame, prescricao, queixas, id) {
      if (id) {
        this.prontuario = {
          laudo,
          data,
          exame,
          prescricao,
          queixas,
          id,
        };
        this.isNew = false;
      } else {
        this.isNew = true;
        this.prontuario = {};
      }
      this.updateModal = true;
    },

    async deleteItem(id) {
      const response = await store().dispatch('record/deleteRecord', id);
      if(response) {
        await store().dispatch('record/getRecord');
         await store().dispatch('appointment/getAppointment');
        this.$q.notify({
          color: 'positive',
          message: 'Item deletado com sucesso',
          icon: 'done'
        });
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Ocorreu algum erro',
          icon: 'report_problem'
        });
      }
    },

    closeModal() {
      this.updateModal = false;
    },
  },
  computed: {
    ...mapGetters('record', ['getRecord']),
    ...mapGetters('appointment', ['getAppointment']),
    filterPatients() {
      return this.filter ? this.getRecord.filter((prontuario) => { /* eslint-disable-line arrow-body-style */
        return prontuario.laudo.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getRecord;
    },
  },
  async mounted() {
    console.log(this.getRecord);
    await store().dispatch('record/getRecord');
    await store().dispatch('appointment/getAppointment');
    this.getAppointment.forEach(el => {
      this.consultas.push({label: el.data, consultaId: el.id, value: el.data})
    });
    console.log(this.getRecord);
  },
};
</script>
