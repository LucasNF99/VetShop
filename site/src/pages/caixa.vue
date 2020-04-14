<template>
  <div class="m-cashier">
    <div class="m-cashier-input">
      <h3>Caixa</h3>
      <q-scroll-area style="height: 200px; whidth: 400px;">
        <q-list class="">
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 1</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 3 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 4 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 5 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
           <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
        </q-list>
      </q-scroll-area>
      <div>
        <h4>Total:</h4>
      </div>
    </div>
    <aside class="m-cashier-aside">
      <q-scroll-area style="height: 200px; max-width: 250px;">
        <q-list class="m-cashier-share-list">
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 1</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 3 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 4 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 5 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
           <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Prod 2 </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator/>
        </q-list>
        </q-scroll-area>
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
