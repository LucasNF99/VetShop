<template>
  <div class="o-produto">
    <q-table
        :data="filterProducts"
        :columns="columns"
        row-key="name"
        class="m-table-produto"
        virtual-scroll
        :pagination.sync="pagination"
      >
      <template v-slot:top>
        <p class="m-table-produto_title">Vendas</p>
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
          <q-td key="valor" :props="props">
            R$ {{ props.row.valor}}
          </q-td>
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit"
            @click="openUpdate(
            props.row.nome,
            props.row.valor,
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
    <updateModalMed
    :updateModal="updateModal"
    :isNew="isNew"
    :produto="produto"
    @closeModal="closeModal"
    />
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import updateModalMed from '../components/update-modal';
import store from '../store';
import moment from 'moment';

const columns = [
  {
    name: 'data', align: 'left', label: 'Data', field: 'data',
  },
  {
    name: 'valor', align: 'left', label: 'Valor', field: 'valor',
  },
  {
    name: 'id', align: 'left', label: 'Id', field: 'id',
  },
];

export default {
  components: {
    updateModalMed,
  },
  data() {
    return {
      filter: '',
      data: this.getSale,
      columns,
      updateModal: false,
      venda: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
      confirm: false,
    };
  },
  methods: {
    openUpdate(nome, precoVenda, descricao, quantidade, fornecedor, precoCompra, id) {
      if (nome) {
        this.produto = {
          nome,
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
        this.venda = {};
      }
      this.updateModal = true;
    },

    async deleteItem(id) {
      const response = await store().dispatch('sale/deleteSale', id);
      if(response) {
        await store().dispatch('sale/getSale');
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
    ...mapGetters('sale', ['getSale']),
    filterProducts() {
      return this.filter ? this.getSale.filter((venda) => { /* eslint-disable-line arrow-body-style */
        return venda.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getSale;
    },
  },
  async mounted() {
    await store().dispatch('sale/getSale');
  },
};
</script>
