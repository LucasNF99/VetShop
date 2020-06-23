<template>
  <div>
    <q-dialog v-model="updateModal" class="m-modal-update">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{isNew ? 'Novo paciente' : 'Editar paciente'}}</div>
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
              <span class="m-update_field-label">Especie:</span>
              <q-input v-model="especie"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="especie"
              class="m-update_field-input text-area" />
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Raça:</span>
              <q-input type="text" v-model="raca"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="raca"
              class="m-update_field-input"/>
            </div>
            <div>
            <div class="m-modal-update_field _select">
              <span class="m-update_field-label">Cliente:</span>
              <q-select v-model="cliente" :options="clientes" label="Selecione"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="cliente"
              class="m-update_field-input"/>
            </div>
          </div>
          </div>
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Peso:</span>
              <q-input type="number" v-model="peso" class="m-update_field-input"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="peso"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Altura:</span>
              <q-input type="number" v-model="altura" class="m-update_field-input"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="altura"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Data de nascimento:</span>
              <q-input v-model="dataNascimento" type="date" class="m-update_field-input"
              :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="dataNascimento"/>
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
/* eslint-disable */
import { mapGetters } from 'vuex';
import store from '../store';

export default {
  nome: 'updateModal',
  props: {
    updateModal: Boolean,
    paciente: Object,
    isNew: Boolean,
  },
  data() {
    return {
      nome: '',
      nomeDono: '',
      especie: '',
      raca: '',
      peso: 0,
      altura: 0,
      dataNascimento: 0,
      id: 0,
      cliente: '',
      clientes: [],
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.nome.validate();
      this.$refs.especie.validate();
      this.$refs.raca.validate();
      this.$refs.peso.validate();
      this.$refs.altura.validate();
      this.$refs.dataNascimento.validate();
      if (this.$refs.nome.hasError
      || this.$refs.especie.hasError
      || this.$refs.peso.hasError
      || this.$refs.raca.hasError
      || this.$refs.altura.hasError
      || this.$refs.dataNascimento.hasError
      ) {
        this.formHasError = true;
      } else {
        if (!this.isNew) {
          this.formatData();
        } else {
          const payload = {
            nome: this.nome,
            cliente_id: this.cliente.clienteId,
            especie: this.especie,
            raca: this.raca,
            peso: this.peso,
            altura: this.altura,
            dataNascimento: this.dataNascimento,
          };
          const response = await store().dispatch('patient/createPatient', payload);
          if (response.id) {
            await store().dispatch('patient/getPatient');
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
        especie: this.especie,
        cliente_id: this.cliente.clienteId,
        raca: this.raca,
        peso: this.peso,
        altura: this.altura,
        dataNascimento: this.dataNascimento,
        pacienteId: this.id,
      };
      const response = await store().dispatch('patient/updatePatient', payload);
      if (response) {
        await store().dispatch('patient/getPatient');
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
    paciente(value) {
      if (value.id) {
        this.nome = value.nome;
        this.cliente = value.nomeDono;
        this.especie = value.especie;
        this.raca = value.raca;
        this.peso = value.peso;
        this.altura = value.altura;
        this.dataNascimento = value.dataNascimento;
        this.id = value.id;
      }
    },
  },
  computed: {
    ...mapGetters('client', ['getClient']),
  },
  async mounted() {
    await store().dispatch('client/getClient');
    this.getClient.forEach(el => {
      this.clientes.push({label: el.nome, clienteId: el.id, value: el.nome})
    });
  },
};
</script>
