<template>
  <div class="o-produto">
    <q-btn no-caps icon="add" class="a-btn _add">
      Aidicionar novo produto
    </q-btn>
    <q-table
        :data="data"
        :columns="columns"
        title="Medicamentos"
        row-key="name"
        class="m-table-produto"
        virtual-scroll
        :pagination.sync="pagination"
      >
      <template class="m-table-template" v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="description" :props="props" class="a-table-td-descricao">
            <div class="a-table-descricao">
              {{ props.row.description }}
            </div>
          </q-td>
          <q-td key="price" :props="props">
            R$ {{ props.row.priceSell }}
          </q-td>
          <q-td key="amount" :props="props">
            {{ props.row.amount }}
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit"
            @click="openUpdate(
            props.row.name,
            props.row.priceSell,
            props.row.description,
            props.row.amount
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
    <updateModal :updateModal="updateModal" :produto="produto" @closeModal="closeModal"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import updateModal from '../components/update-modal';
import store from '../store';

const columns = [
  {
    name: 'name', align: 'left', label: 'Nome', field: 'name',
  },
  {
    name: 'description', align: 'left', label: 'Descrição', field: 'descricao',
  },
  {
    name: 'price', align: 'left', label: 'Preço', field: 'preco',
  },
  {
    name: 'amount', align: 'left', label: 'Quantidade', field: 'quantidade',
  },
];

const data = [
  {
    name: 'VacinaV500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    priceSell: 6.22,
    amount: 24,
  },
  {
    name: 'DogRas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    priceSell: 9.0,
    amount: 37,
  },
  {
    name: 'Osso',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    priceSell: 16.0,
    amount: 23,
  },
  {
    name: 'Mordedo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    priceSell: 350.99,
    amount: 67,
  },
  {
    name: 'Teste',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    priceSell: 16.0,
    amount: 49,
  },
];
export default {
  components: {
    updateModal,
  },
  data() {
    return {
      data,
      columns,
      updateModal: false,
      produto: null,
      pagination: {
        rowsPerPage: 5,
      },
    };
  },
  methods: {
    openUpdate(name, priceSell, description, amount) {
      this.produto = {
        name,
        priceSell,
        description,
        amount,
      };
      this.updateModal = true;
    },

    closeModal() {
      this.updateModal = false;
    },
  },
  computed: {
    ...mapGetters('medicine', ['getMedicine']),
  },
  async mouted() {
    await store().dispatch('medicine/getMedicine');
  },
};
</script>
