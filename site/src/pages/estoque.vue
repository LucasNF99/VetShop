<template>
  <q-page class="o-estoque">
    <div class="m-estoque-tab">
      <q-tabs
        v-model="tab"
      >
        <q-tab
        class="m-estoque-tab-item"
        name="consultar"
        icon="assignment"
        label="Consultar"
         />
        <q-tab
        class="m-estoque-tab-item"
        name="atualizar"
        icon="cached"
        label="Atualizar"
         />
        <q-tab
        class="m-estoque-tab-item"
        name="adicionar"
        icon="add"
        label="Adicionar"
         />
        <q-tab
        class="m-estoque-tab-item"
        name="deletar"
        icon="delete"
        label="Deletar"
        />
      </q-tabs>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: 'mails',
    };
  },
};
</script>
