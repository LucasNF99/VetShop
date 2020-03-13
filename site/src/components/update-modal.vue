<template>
  <div>
    <q-dialog v-model="updateModal" class="m-modal-update">
      <q-card>
        <q-card-section>
          <div class="text-h6">Editar produto</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="m-modal-update-">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
          <div class="m-modal-update_field">
            Nome: <q-input v-model="name"/>
          </div>
          <div class="m-modal-update_field">
            Descrição: <q-input v-model="name"/>
          </div>
          <div class="m-modal-update_field">
            Descrição: <q-input v-model="name"/>
          </div>
          <div class="m-modal-update_field">
            Preço: <q-input v-model="name"/>
          </div>
          <div class="m-modal-update_field">
            Quantidade: <q-input v-model="name"/>
          </div>
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn class="a-btn_external"
          no-caps flat label="Cancelar"
          @click="formatData"/>
          <q-btn class="a-btn_external"
           no-caps flat label="Salvar"  @click="formatData" />
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
    onSubmit() {
      console.log('Foi');
    },
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
  computed: {
    name() {
      return this.produto.nome;
    },
  },
};
</script>
