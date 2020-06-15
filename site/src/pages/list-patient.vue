<template>
  <div class="o-produto">
    <q-btn no-caps icon="add" class="a-btn _add" @click="openUpdate()">
      Adicionar paciente
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
        <p class="m-table-produto_title">Pacientes</p>
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
          <q-td key="nome" :props="props">
            {{ props.row.nome }}
          </q-td>
          <q-td key="especie" :props="props">
            <div>
              {{ props.row.especie }}
            </div>
          </q-td>
          <q-td key="raca" :props="props">
            {{ props.row.raca }}
          </q-td>
          <q-td key="peso" :props="props">
            {{ props.row.peso }}
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit"
            @click="openUpdate(
            props.row.nome,
            props.row.especie,
            props.row.raca,
            props.row.peso,
            props.row.altura,
            props.row.dataNascimento,
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
              <span class="q-ml-sm">Deseja realmente excluir este paciente?</span>
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
    :paciente="paciente"
    @closeModal="closeModal"
    />
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import updateModalMed from '../components/modal-patient';
import store from '../store';

const columns = [
  {
    name: 'nome', align: 'left', label: 'Nome', field: 'nome',
  },
  {
    name: 'especie', align: 'left', label: 'Especie', field: 'especie',
  },
  {
    name: 'raca', align: 'left', label: 'Raça', field: 'raca',
  },
  {
    name: 'peso', align: 'left', label: 'Peso', field: 'peso',
  },
];

export default {
  components: {
    updateModalMed,
  },
  data() {
    return {
      filter: '',
      data: this.getPatient,
      columns,
      updateModal: false,
      paciente: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
      confirm: false,
    };
  },
  methods: {
    openUpdate(nome, especie, raca, peso, altura, dataNascimento, id) {
      if (nome) {
        this.paciente = {
          nome,
          especie,
          raca,
          peso,
          altura,
          dataNascimento,
          id,
        };
        this.isNew = false;
      } else {
        this.isNew = true;
        this.paciente = {};
      }
      this.updateModal = true;
    },

    async deleteItem(id) {
      const response = await store().dispatch('patient/deletePatient', id);
      if(response) {
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
    ...mapGetters('patient', ['getPatient']),
    filterPatients() {
      return this.filter ? this.getPatient.filter((paciente) => { /* eslint-disable-line arrow-body-style */
        return paciente.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getPatient;
    },
  },
  async mounted() {
    await store().dispatch('patient/getPatient');
  },
};
</script>
