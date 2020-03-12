<template>
  <div>
    <q-dialog v-model="updateModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Editar produto</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="min-height: 50vh">
          <p>{{produto.nome}}</p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<!--           <q-btn label="Salvar" flat round dense
          @click="formatData"/>
-->

<script>
export default {
  name: 'updateModal',
  props: {
    updateModal: Boolean,
    produto: Object,
  },
  methods: {
    closeModal(value) {
      this.$emit('closeModal', value);
    },
    formatData() {
      const payload = {
        name: this.produto,
        value: 45.00,
      };

      this.closeModal(payload);
    },
  },
};
</script>
