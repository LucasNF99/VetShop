<template>
  <div>
    <q-dialog v-model="updateModal" class="m-modal-update">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{isNew ? 'Novo produto' : 'Editar produto'}}</div>
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
              <q-input v-model="nome"
                class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Descrição:</span>
              <q-input v-model="descricao"
              class="m-update_field-input text-area" />
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Quantidade:</span>
              <q-input v-model="quantidade"
              class="m-update_field-input"/>
            </div>
          </div>
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Preço de venda:</span>
              <q-input v-model="precoVenda" class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Preço de compra:</span>
              <q-input v-model="precoCompra" class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Fornecedor:</span>
              <q-input v-model="fornecedor" class="m-update_field-input"/>
            </div>
          </div>
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn class="a-btn_external"
          no-caps flat label="Cancelar" @click="closeModal"/>
          <q-btn class="a-btn_external"
           no-caps flat label="Salvar" @click="onSubmit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<!--           <q-btn label="Salvar" flat round dense
          @click="formatData"/>
-->

<script>
import store from '../store';

export default {
  nome: 'updateModal',
  props: {
    updateModal: Boolean,
    produto: Object,
    isNew: Boolean,
  },
  data() {
    return {
      nome: '',
      descricao: '',
      precoVenda: 0,
      precoCompra: 0,
      fornecedor: '',
      quantidade: 0,
    };
  },
  methods: {
    async onSubmit() {
      if (!this.isNew) {
        this.formatData();
      } else {
        const payload = {
          nome: this.nome,
          precoVenda: this.precoVenda,
          descricao: this.descricao,
          quantidade: this.quantidade,
          precoCompra: this.precoCompra,
          fornecedor: this.fornecedor,
        };
        const response = await store().dispatch('medicine/createMedicine', payload);
        console.log(response);
      }
      this.closeModal();
    },
    closeModal(value) {
      if (value) this.$emit('closeModal', value);
      else this.$emit('closeModal');
    },
    formatData() {
      const payload = {
        nome: this.nome,
        precoVenda: this.precoVenda,
        descricao: this.descricao,
        quantidade: this.quantidade,
        precoCompra: this.precoCompra,
        fornecedor: this.fornecedor,
      };
      console.log(payload);
    },
  },
  computed: {
  },
};
</script>
