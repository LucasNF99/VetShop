<template>
  <div class="o-produto">
    <q-btn no-caps icon="add" class="a-btn _add" @click="openUpdate()">
      Adicionar prontuario
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
        <p class="m-table-produto_title">Prontuario</p>
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
          <q-td key="laudo" :props="props"  class="a-table-td-descricao">
            <div class="a-table-descricao">
            {{ props.row.laudo }}
            </div>
          </q-td>
          <q-td key="exame" :props="props" class="a-table-td-descricao">
            <div class="a-table-descricao">
              {{ props.row.exame }}
            </div>
          </q-td>
          <q-td key="prescricao" :props="props">
            R$ {{ props.row.prescricao }}
          </q-td>
          <q-td key="queixas" :props="props">
            {{ props.row.queixas }}
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit"
            @click="openUpdate(
            props.row.laudo,
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
    <updateModalRecord
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
import updateModalRecord from '../components/modal-record';
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
];

export default {
  components: {
    updateModalRecord,
  },
  data() {
    return {
      filter: '',
      data: this.getRecord,
      columns,
      updateModalRecord: false,
      prontuario: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
      confirm: false,
    };
  },
  methods: {
    openUpdate(laudo, exame, prescricao, queixas, id) {
      if (id) {
        this.prontuario = {
          nome,
          exame,
          precoCompra,
          prescricao,
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
    filterProducts() {
      return this.filter ? this.getRecord.filter((prontuario) => { /* eslint-disable-line arrow-body-style */
        return prontuario.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getRecord;
    },
  },
  async mounted() {
    await store().dispatch('record/getRecord');
  },
};
</script>
