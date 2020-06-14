<template>
  <div>
    <q-dialog v-model="updateModalCli" class="m-modal-update">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{isNew ? 'Novo usuario' : 'Editar dados'}}</div>
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
                class="m-update_field-input"
                 :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="nome"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">E-mail:</span>
              <q-input v-model="email"
               :rules="[val => !!val || 'Campo obrigatorio!']"
               ref="email"
              class="m-update_field-input" />
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Telefone:
              </span>
              <q-input v-model="telefone" mask="(##) ##### - ####" class="m-update_field-input"
               :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="telefone"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">CPF:</span>
              <q-input v-model="cpf" class="m-update_field-input"
               :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="cpf"/>
            </div>
          </div>
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Numero°</span>
              <q-input type="number" v-model="numero"
               :rules="[val => !!val || 'Campo obrigatorio!']"
               ref="numero"
              class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Bairro:</span>
              <q-input v-model="bairro"
               :rules="[val => !!val || 'Campo obrigatorio!']"
               ref="bairro"
               class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Rua:</span>
              <q-input v-model="rua"
               :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="rua"
               class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Senha:</span>
              <q-input v-model="senha" class="m-update_field-input"
               :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="senha"/>
            </div>
          </div>
          </q-form>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="m-modal_btns">
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
  nome: 'updateModalCli',
  props: {
    updateModalCli: Boolean,
    usuario: Object,
    isNew: Boolean,
  },
  data() {
    return {
      nome: '',
      email: '',
      telefone: '',
      bairro: '',
      rua: '',
      numero: 0,
      cpf: '',
      senha: '',
      id: 0,
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.nome.validate();
      this.$refs.cpf.validate();
      this.$refs.telefone.validate();
      this.$refs.email.validate();
      this.$refs.rua.validate();
      this.$refs.bairro.validate();
      this.$refs.numero.validate();
      this.$refs.senha.validate();
      if (this.$refs.nome.hasError
      || this.$refs.cpf.hasError
      || this.$refs.telefone.hasError
      || this.$refs.email.hasError
      || this.$refs.rua.hasError
      || this.$refs.bairro.hasError
      || this.$refs.numero.hasError
      || this.$refs.senha.hasError
      ) {
        this.formHasError = true;
      } else {
        if (!this.isNew) {
          this.formatData();
        } else {
          const payload = {
            nome: this.nome,
            telefone: this.telefone,
            email: this.email,
            numero: this.numero,
            bairro: this.bairro,
            rua: this.rua,
            cpf: this.cpf,
            senha: this.senha,
          };
          const response = await store().dispatch('user/createUser', payload);
          if (response) {
            await store().dispatch('user/getUser');
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
        telefone: this.telefone,
        email: this.email,
        numero: this.numero,
        bairro: this.bairro,
        rua: this.rua,
        cpf: this.cpf,
        senha: this.senha,
        usuarioId: this.id,
      };
      const response = await store().dispatch('user/updateUser', payload);
      if (response) {
        await store().dispatch('user/getUser');
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
    usuario(value) {
      if (value.id) {
        this.nome = value.nome;
        this.email = value.email;
        this.telefone = value.telefone;
        this.bairro = value.bairro;
        this.rua = value.rua;
        this.numero = value.numero;
        this.cpf = value.cpf;
        this.senha = value.senha;
        this.id = value.id;
      }
    },
  },
  computed: {
  },
};
</script>
