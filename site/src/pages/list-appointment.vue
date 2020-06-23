<template>
  <div class="o-produto">
    <q-btn no-caps icon="add" class="a-btn _add" @click="openUpdate()">
      Marcar consulta
    </q-btn>
    <q-table
        :data="filterProducts"
        :columns="columns"
        row-key="name"
        class="m-table-produto"
        virtual-scroll
        :pagination.sync="pagination"
      >
      <template v-slot:top>
        <p class="m-table-produto_title">Consultas</p>
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
          <q-td key="data" :props="props">
            {{ props.row.data }}
          </q-td>
          <q-td key="hora" :props="props">
            {{ props.row.hora }}
          </q-td>
          <q-td key="paciente" :props="props" class="a-table-td-descricao">
              {{ props.row.Paciente.nome }}
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit"
            @click="openUpdate(
            props.row.Paciente.nome,
            props.row.data,
            props.row.hora,
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
              <span class="q-ml-sm">Deseja realmente excluir esta consulta?</span>
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
    <updateModal
    :updateModal="updateModal"
    :isNew="isNew"
    :consulta="consulta"
    @closeModal="closeModal"
    />
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import updateModal from '../components/modal-appointment';
import store from '../store';

const columns = [
  {
    name: 'data', align: 'left', label: 'Data', field: 'data',
  },
  {
    name: 'hora', align: 'left', label: 'Hora', field: 'hora',
  },
  {
    name: 'paciente', align: 'left', label: 'Paciente', field: 'paciente',
  },
];

export default {
  components: {
    updateModal,
  },
  data() {
    return {
      filter: '',
      data: this.getAppointment,
      columns,
      updateModal: false,
      pacientes: [],
      consulta: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
      confirm: false,
    };
  },
  methods: {
    openUpdate(nome, data, hora, id) {
      if (nome) {
        this.consulta = {
          nome,
          data,
          hora,
          id,
        };
        this.isNew = false;
      } else {
        this.isNew = true;
        this.consulta = {};
      }
      this.updateModal = true;
    },

    async deleteItem(id) {
      const response = await store().dispatch('appointment/deleteAppointment', id);
      if(response) {
        await store().dispatch('appointment/getAppointment');
        await store().dispatch('patient/getPatient');
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
    ...mapGetters('appointment', ['getAppointment']),
    ...mapGetters('patient', ['getPatient']),
    filterProducts() {
      return this.filter ? this.getAppointment.filter((consulta) => { /* eslint-disable-line arrow-body-style */
        return consulta.data.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getAppointment;
    },
  },
  async mounted() {
    await store().dispatch('appointment/getAppointment'); 
    await store().dispatch('patient/getPatient');
    this.getPatient.forEach(el => {
      this.pacientes.push({label: el.nome, pacienteId: el.id, value: el.nome})
    });
    console.log(this.getAppointment);
  },
};
</script>
