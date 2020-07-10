<template>
  <div>
    <q-dialog v-model="updateModal" class="m-modal-update">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{isNew ? 'Novo prontuario' : 'Editar prontuario'}}</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="m-modal-update-">
          <q-form
            @submit.prevent.stop="onSubmit"
            class="m-modal-update-form"
          >
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Laudo:</span>
              <q-input v-model="laudo"
                :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="laudo"
                class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Exame:</span>
              <q-input v-model="exame"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="exame"
              class="m-update_field-input text-area" />
            </div>
            <div>
          </div>
          </div>
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Queixas:</span>
              <q-input type="text" v-model="queixas" class="m-update_field-input"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="queixas"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Prescrição:</span>
              <q-input type="text" v-model="prescricao"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="prescricao"
              class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field _select">
              <span class="m-update_field-label">Consulta:</span>
              <q-select v-model="consulta" :options="consultas" label="Selecione"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="consulta"
              class="m-update_field-input"/>
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
      laudo: '',
      data: '',
      exame: '',
      prescricao: '',
      queixas: '',
      id: 0,
      consulta: '',
      consultas: [],
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.laudo.validate();
      this.$refs.exame.validate();
      this.$refs.prescricao.validate();
      this.$refs.queixas.validate();
      if (this.$refs.laudo.hasError
      || this.$refs.exame.hasError
      || this.$refs.prescricao.hasError
      || this.$refs.queixas.hasError
      ) {
        this.formHasError = true;
      } else {
        if (!this.isNew) {
          this.formatData();
        } else {
          const payload = {
            laudo: this.laudo,
            consulta_id: this.consulta.consultaId,
            exame: this.exame,
            prescricao: this.prescricao,
            queixas: this.queixas,
          };
          const response = await store().dispatch('record/createRecord', payload);
          if (response.id) {
            await store().dispatch('record/getRecord');
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
        laudo: this.laudo,
        consulta_id: this.consulta.consultaId,
        exame: this.exame,
        prescricao: this.prescricao,
        queixas: this.queixas,
        prontuarioId: this.id,
      };
      const response = await store().dispatch('record/updateRecord', payload);
      if (response) {
        await store().dispatch('record/getRecord');
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
        this.laudo = value.laudo;
        this.consulta = value.data;
        this.exame = value.exame;
        this.prescricao = value.prescricao;
        this.queixas = value.queixas;
        this.id = value.id;
      }
    },
  },
  computed: {
    ...mapGetters('appointment', ['getAppointment']),
  },
  async mounted() {
    await store().dispatch('appointment/getAppointment');
    this.getAppointment.forEach(el => {
      this.consultas.push({label: el.data, consultaId: el.id, value: el.data})
    });
  },
};
</script>
