<template>
  <div class="o-produto">
    <q-btn no-caps icon="add" class="a-btn _add" @click="openUpdate()">
      Aidicionar novo produto
    </q-btn>
    <q-table
        :data="getMedicine"
        :columns="columns"
        title="Medicamentos"
        row-key="name"
        class="m-table-produto"
        virtual-scroll
        :pagination.sync="pagination"
      >
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
            props.row.quantidade
            )">
              <q-tooltip>Editar item</q-tooltip>
            </q-btn>
            <q-btn size="md" round icon="delete">
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
      data: this.getMedicine,
      columns,
      updateModal: false,
      produto: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
    };
  },
  methods: {
    openUpdate(nome, precoVenda, descricao, quantidade, fornecedor, precoCompra) {
      if (nome) {
        this.produto = {
          nome,
          precoVenda,
          precoCompra,
          descricao,
          quantidade,
          fornecedor,
        };
        this.isNew = false;
      } else {
        this.isNew = true;
        this.produto = {};
      }
      this.updateModal = true;
    },

    closeModal() {
      this.updateModal = false;
    },
  },
  computed: {
    ...mapGetters('medicine', ['getMedicine']),
  },
  async mounted() {
    await store().dispatch('medicine/getMedicine');
  },
};
</script>
