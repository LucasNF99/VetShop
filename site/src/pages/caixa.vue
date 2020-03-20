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
      <ol>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
      </ol>
        <q-input
          filled
          placeholder="Search"
        >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </aside>
  </div>
</template>
