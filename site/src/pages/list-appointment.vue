<template>
  <div class="o-produto">
    <q-btn no-caps icon="add" class="a-btn _add" @click="openUpdate()">
      Marcar nova consulta
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
          <q-td key="id" :props="props" class="a-table-td-descricao">
            <div>
              {{ props.row.id}}
            </div>
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit"
            @click="openUpdate(
            props.row.nome,
            props.row.precoVenda,
            props.row.descricao,
            props.row.quantidade,
            props.row.fornecedor,
            props.row.precoCompra,
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
              <span class="q-ml-sm">Deseja realmente excluir este medicamento?</span>
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
import updateModal from '../components/update-modal-appointment';
import store from '../store';

const columns = [
  {
    name: 'data', align: 'left', label: 'Data', field: 'data',
  },
  {
    name: 'id', align: 'left', label: 'Id', field: 'id',
  },
  {
    name: 'price', align: 'left', label: 'Preço', field: 'preco',
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
      consulta: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
      confirm: false,
    };
  },
  methods: {
    openUpdate(data, precoVenda, descricao, quantidade, fornecedor, precoCompra, id) {
      if (data) {
        this.consulta = {
          data,
          precoVenda,
          precoCompra,
          descricao,
          quantidade,
          fornecedor,
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
    filterProducts() {
      return this.filter ? this.getAppointment.filter((produto) => { /* eslint-disable-line arrow-body-style */
        return produto.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getAppointment;
    },
  },
  async mounted() {
    await store().dispatch('appointment/getAppointment');
  },
};
</script>
