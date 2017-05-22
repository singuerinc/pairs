<template>
  <div class="tc w-100 pa3">
    <div class="vh-100 w-100 dt">
      <div class="v-mid dtc tc">
        <h1 class="f1 ma0 mb4 near-black normal">Play!</h1>
        <ul class="list w-100 ma0 pa0">
          <Cell v-for="idx in board.cells" :key="idx" :idx="idx" :size="cellSize"></Cell>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import router from '../router';
  import store from '../store';
  import { UPDATE_NUM_CELLS } from '../store/mutation-types';
  import Cell from './Cell';

  export default {
    name: 'board',
    router,
    store,
    components: {
      Cell,
    },
    created() {
      store.commit(UPDATE_NUM_CELLS, { numCells: parseInt(this.$route.params.cells, 10) });
    },
    computed: {
      ...mapState([
        'board',
      ]),
      cellSize() {
        switch (this.board.cells.length) {
          case 20:
            return 'w-10';
          case 50:
            return 'w4';
          case 200:
            return 'w3';
          default:
            return 'w-20';
        }
      },
    },
  };
</script>
