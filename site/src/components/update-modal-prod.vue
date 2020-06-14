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
            @submit.prevent.stop="onSubmit"
            class="m-modal-update-form"
          >
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Nome:</span>
              <q-input v-model="nome"
                :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="nome"
                class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Descrição:</span>
              <q-input v-model="descricao"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="descricao"
              class="m-update_field-input text-area" />
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Quantidade:</span>
              <q-input type="number" v-model="quantidade"
              :rules="[val => val >= 0 || 'Não pode ter valor negativo!']"
              ref="quantidade"
              class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Classe:</span>
              <q-input v-model="classe"
                :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="classe"
               class="m-update_field-input"/>
            </div>
          </div>
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Preço de venda:</span>
              <q-input type="number" v-model="precoVenda"
                :rules="[val => val >= 0 || 'Não pode ter valor negativo!']"
                ref="precoVenda"
               class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Preço de compra:</span>
              <q-input type="number" v-model="precoCompra"
                :rules="[val => val >= 0 || 'Não pode ter valor negativo!']"
               class="m-update_field-input"
               ref="precoCompra"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Fornecedor:</span>
              <q-input v-model="fornecedor"
                :rules="[val => !!val || 'Campo obrigatorio!']"
               class="m-update_field-input" ref="fornecedor"/>
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
      classe: '',
      id: 0,
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.nome.validate();
      this.$refs.quantidade.validate();
      this.$refs.precoCompra.validate();
      this.$refs.precoVenda.validate();
      this.$refs.fornecedor.validate();
      this.$refs.descricao.validate();
      this.$refs.classe.validate();
      if (this.$refs.nome.hasError
      || this.$refs.quantidade.hasError
      || this.$refs.precoVenda.hasError
      || this.$refs.precoCompra.hasError
      || this.$refs.fornecedor.hasError
      || this.$refs.descricao.hasError
      || this.$refs.classe.hasError
      ) {
        this.formHasError = true;
      } else {
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
            classe: this.classe,
          };
          const response = await store().dispatch('product/createProduct', payload);
          if (response) {
            await store().dispatch('product/getProduct');
            this.$q.notify({
              color: 'positive',
              message: 'Item criado com sucesso!',
              icon: 'done',
            });
          } else {
            this.$q.notify({
              color: 'negative',
              message: 'Ocorreu algum erro!',
              icon: 'report_problem',
            });
          }
        }
        this.closeModal();
      }
    },
    closeModal(value) {
      if (value) this.$emit('closeModal', value);
      else this.$emit('closeModal');
    },
    async formatData() {
      const payload = {
        nome: this.nome,
        precoVenda: this.precoVenda,
        descricao: this.descricao,
        quantidade: this.quantidade,
        precoCompra: this.precoCompra,
        fornecedor: this.fornecedor,
        classe: this.classe,
        produtoId: this.id,
      };
      const response = await store().dispatch('product/updateProduct', payload);
      if (response) {
        await store().dispatch('product/getProduct');
        this.$q.notify({
          color: 'positive',
          message: 'Item editado com sucesso!',
          icon: 'done',
        });
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Ocorreu algum erro!',
          icon: 'report_problem',
        });
      }
    },
  },
  watch: {
    produto(value) {
      if (value.id) {
        this.nome = value.nome;
        this.descricao = value.descricao;
        this.precoVenda = value.precoVenda;
        this.precoCompra = value.precoCompra;
        this.fornecedor = value.fornecedor;
        this.quantidade = value.quantidade;
        this.classe = value.classe;
        this.id = value.id;
      }
    },
  },
  computed: {
  },
};
</script>
