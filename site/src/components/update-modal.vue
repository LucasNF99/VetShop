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
            class="m-modal-update-form"
          >
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Nome:</span>
              <q-input v-model="name"
                class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Descrição:</span>
              <q-input v-model="name"
              class="m-update_field-input" autogrow/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Quantidade:</span>
              <q-input v-model="name"
              class="m-update_field-input"/>
            </div>
          </div>
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Preço de venda:</span>
              <q-input v-model="price" class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Preço de compra:</span>
              <q-input v-model="name" class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Fornecedor:</span>
              <q-input v-model="name" class="m-update_field-input"/>
            </div>
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
        name: this.produto.name,
        price: this.produto.price,
      };

      this.closeModal(payload);
    },
  },
  computed: {
    name() {
      return this.produto.name;
    },
    price() {
      return this.produto.price;
    },
  },
};
</script>
