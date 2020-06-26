<template>
  <div>
    <q-dialog v-model="updateModal" class="m-modal-update">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{isNew ? 'Nova consulta' : 'Editar consulta'}}</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="m-modal-update-">
          <q-form
            @submit.prevent.stop="onSubmit"
            class="m-modal-update-form"
          >
          <div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Data:</span>
              <q-input v-model="data" type="date"
              :rules="[val => !!val || 'Campo obrigatorio!']"
                ref="data"
                class="m-update_field-input"/>
            </div>
            <div class="m-modal-update_field">
              <span class="m-update_field-label">Hora:</span>
              <q-input v-model="hora" type="time"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="hora"
              class="m-update_field-input"
              />
            </div>
          </div>
          <div>
            <div class="m-modal-update_field _select">
              <span class="m-update_field-label">Paciente:</span>
              <q-select v-model="paciente" :options="pacientes" label="Selecione"
              :rules="[val => !!val || 'Campo obrigatorio!']"
              ref="paciente"
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
    consulta: Object,
    isNew: Boolean,
  },
  data() {
    return {
      nome: '',
      data: '',
      hora: '',
      id: 0,
      pacientes: [],
      paciente: '',
    };
  },
  methods: {
    async onSubmit() {
      this.$refs.data.validate();
      this.$refs.hora.validate();
      this.$refs.paciente.validate();
      if (this.$refs.data.hasError
      || this.$refs.hora.hasError
      || this.$refs.paciente.hasError
      ) {
        this.formHasError = true;
      } else {
        if (!this.isNew) {
          this.formatData();
        } else {

          const payload = {
            paciente_id: this.paciente.pacienteId,
            data: this.data,
            hora: this.hora,
          };
          console.log(this.paylod);

          const response = await store().dispatch('appointment/createAppointment', payload);
          if (response.id) {
            await store().dispatch('appointment/getAppointment');
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
        paciente_id: this.paciente.pacienteId,
        data: this.data,
        hora: this.hora,
        consultaId: this.id,
      };
      const response = await store().dispatch('appointment/updateAppointment', payload);
      if (response) {
        await store().dispatch('appointment/getAppointment');
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
    consulta(value) {
      console.log(value);
      
      if (value.id) {
        this.paciente = value.nome;
        this.data = value.data;
        this.hora = value.hora;
        this.id = value.id;
      }
    },
  },
  computed: {
    ...mapGetters('patient', ['getPatient']),
  },
  async mounted() {
    await store().dispatch('patient/getPatient');
    this.getPatient.forEach(el => {
      this.pacientes.push({label: el.nome, pacienteId: el.id, value: el.nome})
    });
  },
};
</script>
