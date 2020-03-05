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
          <q-td key="nome" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" buttons>
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="descricao" :props="props" class="a-table-td-descricao">
            <div class="a-table-descricao">
              {{ props.row.descricao }}
            </div>
            <q-popup-edit
              buttons
              v-model="props.row.descricao"
            >
              <q-input
                type="textarea"
                v-model="props.row.descricao"
                autofocus
                counter
                @keyup.enter.stop
              />
            </q-popup-edit>
          </q-td>
          <q-td key="preco" :props="props">
            <div class="text-pre-wrap"
            mask="#,00"
                fill-mask="0"
                reverse-fill-mask>R$ {{ props.row.preco }}</div>
            <q-popup-edit v-model.number="props.row.preco" buttons>
              <q-input
                filled
                v-model="props.row.preco"
                mask="##,##"
                reverse-fill-mask
                input-class="text-right"
              />
            </q-popup-edit>
          </q-td>
          <q-td key="quantidade" :props="props">
            {{ props.row.quantidade }}
            <q-popup-edit v-model.number="props.row.quantidade" buttons persistent>
              <q-input type="number" v-model.number="props.row.quantidade"  dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td>
            <q-btn size="md" round icon="edit">
              <q-tooltip>Deletar item</q-tooltip>
            </q-btn>
            <q-btn size="md" round icon="delete">
              <q-tooltip>Deletar item</q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: 'nome', align: 'left', label: 'Nome', field: 'name',
  },
  {
    name: 'descricao', align: 'left', label: 'Descrição', field: 'descricao',
  },
  {
    name: 'preco', align: 'left', label: 'Preço', field: 'preco',
  },
  {
    name: 'quantidade', align: 'left', label: 'Quantidade', field: 'quantidade',
  },
];

const data = [
  {
    name: 'VacinaV23',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 6.20,
    quantidade: 24,
  },
  {
    name: 'DogRas',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 9.0,
    quantidade: 37,
  },
  {
    name: 'Osso',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 23,
  },
  {
    name: 'Mordedo',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 3.7,
    quantidade: 67,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
  {
    name: 'Teste',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
  },
];
export default {
  data() {
    return {
      data,
      columns,
      pagination: {
        rowsPerPage: 5,
      },
    };
  },
};
</script>
