<template>
  <div>
    <q-toolbar style="max-width: 100%; text-align: center;">
      <q-btn icon="add">
        Aidicionar novo produto
      </q-btn>
      <q-btn icon="delete">
        Excluir produto
      </q-btn>
    </q-toolbar>
   <q-table
      :data="data"
      :columns="columns"
      title="Medicamentos"
      :rows-per-page-options="[]"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="nome" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" buttons>
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="descricao" :props="props">
            {{ props.row.descricao }}
            <q-popup-edit v-model.number="props.row.descricao" buttons>
              <q-input type="text" v-model.number="props.row.descricao" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="preco" :props="props">
            <div class="text-pre-wrap">{{ props.row.preco }}</div>
            <q-popup-edit v-model.number="props.row.preco" buttons>
              <q-input type="number" v-model.number="props.row.preco" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="quantidade" :props="props">
            {{ props.row.quantidade }}
            <q-popup-edit v-model.number="props.row.quantidade" buttons persistent>
              <q-input type="number" v-model.number="props.row.quantidade"  dense autofocus />
            </q-popup-edit>
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
    name: 'Frozen Yogurt',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 6.0,
    quantidade: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 9.0,
    quantidade: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    name: 'Eclair',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    name: 'Cupcake',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 3.7,
    quantidade: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus.',
    preco: 16.0,
    quantidade: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%',
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
