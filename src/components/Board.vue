<template>
  <div class="w-100 pa3">
    <div class="w-100 dt near-black bg-black-10 h2">
      <div class="w-20 v-mid dtc ph3">P1</div>
      <div class="w-60 v-mid dtc ph3 tc pointer" v-on:click="goHome()">Pairs</div>
      <div class="w-20 v-mid dtc ph3 tr">P2</div>
    </div>
    <div class="w-100 db">
      <div class="tc">
        <h1 class="f2 mv1 near-black normal ttu">Find 2 cells with the same color</h1>
        <ul class="list w-100 ma0 pa0 cf">
          <Cell v-for="idx in board.cells" :key="idx" :idx="idx" :color="getColor()" :size="cellSize"></Cell>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import router from '../router';
  import store from '../store';
  import { UPDATE_NUM_CELLS, USER_TYPE } from '../store/mutation-types';
  import Cell from './Cell';

  export default {
    name: 'board',
    router,
    store,
    components: {
      Cell,
    },
    data() {
      return {
        colors: null,
      };
    },
    created() {
      const cells = parseInt(this.$route.params.cells, 10);

      store.commit(USER_TYPE, { userType: cells });
      store.commit(UPDATE_NUM_CELLS, { numCells: cells });

      this.colors = store.state.board.colors;
    },
    methods: {
      goHome: () => {
        router.push('/');
      },
      getColor() {
        return this.colors.shift();
      },
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
