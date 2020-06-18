<template>
  <q-page class="o-index">
    <aside style="flex-grow: 1;">
      <div class="o-index-right">
        <h4 class="a-right-title"><q-icon name="notifications"/> Avisos:</h4>
        <q-scroll-area style="height: 340px; max-width: 350px;">
        <q-list class="list-right">
          <div v-for="product in avisos" :key="product.medicineId">
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Produto em falta: </q-item-label>
                <q-item-label caption>{{product.nome}}: {{product.quantidade}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator/>
          </div>
        </q-list>
        </q-scroll-area>
      </div>
    </aside>
  </q-page>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import store from '../store';
import product from '../store/module/product';

export default {
  name: 'PageIndex',

  data() {
    return {
      check1: false,
      check2: false,
      check3: false,
      filter: '',
      produto: {},
      avisos: [],
      geral: [],
      products: [],
      pagination: {
        rowsPerPage: 7,
      },
      tab: 'mails',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Hora',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
        },
        {
          name: 'paciente', align: 'left', label: 'Paciente', field: 'paciente',
        },
      ],
      data: [
        {
          name: '08:00',
          hora: '13:00',
          paciente: 'José',
        },
        {
          name: '09:00',
          hora: '16:30',
          paciente: 'Safe',
        },
      ],
    };
  },

  computed: {
    ...mapGetters('medicine', ['getMedicine']),
    ...mapGetters('product', ['getProduct']),

    filterProducts() {
      return this.filter ? this.geral.filter((produto) => { /* eslint-disable-line arrow-body-style */
        return produto.nome.toLowerCase().includes(this.filter.toLowerCase());
      }) : this.geral;
    },
  },

  async mounted() {
    await store().dispatch('medicine/getMedicine');
    await store().dispatch('product/getProduct');
    this.geral = this.getMedicine.concat(this.getProduct);
    this.geral.forEach(element => {
      if(element.quantidade < 20) this.avisos.push({nome: element.nome, quantidade: element.quantidade});
    });
  },
};
</script>
