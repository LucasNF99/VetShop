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
          <q-td key="descricao" :props="props" class="a-table-td-descricao">
            <div class="a-table-descricao">
              {{ props.row.descricao }}
            </div>
          </q-td>
          <q-td key="price" :props="props">
            R$ {{ props.row.price }}
          </q-td>
          <q-td key="quantidade" :props="props">
            {{ props.row.quantidade }}
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit" @click="openUpdate(props.row.name, props.row.price)">
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
import updateModal from '../components/update-modal';

const columns = [
  {
    name: 'name', align: 'left', label: 'Nome', field: 'name',
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

const data = [
  {
    name: 'VacinaV23',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    price: 6.22,
    quantidade: 24,
  },
  {
    name: 'DogRas',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    price: 9.0,
    quantidade: 37,
  },
  {
    name: 'Osso',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    price: 16.0,
    quantidade: 23,
  },
  {
    name: 'Mordedo',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    price: 350.99,
    quantidade: 67,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    price: 16.0,
    quantidade: 49,
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
    openUpdate(name, price) {
      this.produto = { name, price };
      this.updateModal = true;
    },

    closeModal(evt) {
      console.log(evt);
      this.updateModal = false;
    },
  },
};
</script>
