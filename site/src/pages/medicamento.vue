<template>
  <div class="o-produto">
    <q-btn no-caps icon="add" class="a-btn _add" @click="openUpdate()">
      Adicionar novo produto
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
        <p class="m-table-produto_title">Medicamento</p>
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
          <q-td key="descricao" :props="props" class="a-table-td-descricao">
            <div class="a-table-descricao">
              {{ props.row.descricao }}
            </div>
          </q-td>
          <q-td key="price" :props="props">
            R$ {{ props.row.precoVenda }}
          </q-td>
          <q-td key="quantidade" :props="props">
            {{ props.row.quantidade }}
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
    name: 'descricao', align: 'left', label: 'Descrição', field: 'descricao',
  },
  {
    name: 'price', align: 'left', label: 'Preço', field: 'preco',
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
      produto: {},
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
        this.produto = {};
      }
      this.updateModal = true;
    },

    async deleteItem(id) {
      const response = await store().dispatch('medicine/deleteMedicine', id);
      if(response) {
        await store().dispatch('medicine/getMedicine');
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
    ...mapGetters('medicine', ['getMedicine']),
    filterProducts() {
      return this.filter ? this.getMedicine.filter((produto) => { /* eslint-disable-line arrow-body-style */
        return produto.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.getMedicine;
    },
  },
  async mounted() {
    await store().dispatch('medicine/getMedicine');
  },
};
</script>
