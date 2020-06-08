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
        <p class="m-table-produto_title">Clientes</p>
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
          <q-td key="email" :props="props">
            <div class="a-table-descricao">
              {{ props.row.email }}
            </div>
          </q-td>
          <q-td key="telefone" :props="props">
            {{ props.row.telefone }}
          </q-td>
          <q-td key="quantidade" :props="props">
            {{ props.row.quantidade }}
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit"
            @click="openUpdate(
            props.row.nome,
            props.row.email,
            props.row.telefone,
            props.row.quantidade,
            props.row.fornecedor,
            props.row.precoCompra,
            props.row.id,
            )">
              <q-tooltip>Editar dados</q-tooltip>
            </q-btn>
            <q-btn @click="deleteItem(props.row.id)" size="md" round icon="delete">
              <q-tooltip>Deletar item</q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <updateModal
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
import updateModal from '../components/update-modal';
import store from '../store';

const columns = [
  {
    name: 'nome', align: 'left', label: 'Nome', field: 'nome',
  },
  {
    name: 'email', align: 'left', label: 'E-mail', field: 'email',
  },
  {
    name: 'telefone', align: 'left', label: 'Telefone', field: 'telefone',
  },
  {
    name: 'quantidade', align: 'left', label: 'Quantidade', field: 'quantidade',
  },
];

// const data = [
//   {
//     name: 'VacinaV500',
//     descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
//     precoVenda: 6.22,
//     quantidade: 24,
//   },
// ];
export default {
  components: {
    updateModal,
  },
  data() {
    return {
      filter: '',
      data: this.getMedicine,
      columns,
      updateModal: false,
      client: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
    };
  },
  methods: {
    openUpdate(nome, precoVenda, descricao, quantidade, fornecedor, precoCompra, id) {
      if (nome) {
        this.cliente = {
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
        this.produto = {};
      }
      this.updateModal = true;
    },

    async deleteItem(id) {
      const response = await store().dispatch('client/deleteClient', id);
      if(response) {
        await store().dispatch('client/getClient');
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
    ...mapGetters('client', ['getClient']),
    filterProducts() {
      return this.filter ? this.getClient.filter((client) => { /* eslint-disable-line arrow-body-style */
        return client.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getClient;
    },
  },
  async mounted() {
    await store().dispatch('client/getClient');
  },
};
</script>
