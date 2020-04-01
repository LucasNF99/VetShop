<template>
  <div class="m-cashier">
    <div class="m-cashier-input">
      <h3>Caixa</h3>
      <ol>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
        <li>item 1</li>
      </ol>
      <div>
        <h4>Total:</h4>
      </div>
    </div>
    <aside>
      <ul>
        <li>Ração</li>
        <li>Vacina</li>
        <li>Osso</li>
        <li>Casinha</li>
        <li>Coleira</li>
      </ul>
        <q-input
          filled
          placeholder="Procurar"
        >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </aside>
  </div>
</template>
