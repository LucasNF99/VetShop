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
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
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
  data() {
    return {
      filter: '',
      data: this.getSale,
      columns,
      venda: {},
      isNew: false,
      pagination: {
        rowsPerPage: 5,
      },
      confirm: false,
    };
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
