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
          <Cell v-for="(item, idx) in cells"
                v-bind:select="select"
                v-bind:key="idx"
                v-bind:idx="idx"
                v-bind:color="getColor(idx)"
                v-bind:size="cellSize"
                v-bind:selected="isSelected(idx)"
                v-bind:class="{'ba bw2 b--black': isSelected(idx)}"
          ></Cell>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import router from '../router';
  import store from '../store';
  import { UPDATE_NUM_CELLS, USER_TYPE, SELECTED_CELLS } from '../store/mutation-types';
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

      this.colors = store.getters.colors;
    },
    methods: {
      goHome: () => {
        router.push('/');
      },
      getColor(idx) {
        return this.colors[idx];
      },
      isSelected(idx) {
        const match = this.selectedCells.find(cell => cell.idx === idx);
        return typeof match !== 'undefined';
      },
      isWin() {
        const [cell0, cell1] = this.selectedCells;
        const equals = cell0.color === cell1.color;

        return equals;
      },
      select(cell) {
        if (cell.selected) return;
        if (this.selectedCells.length === 2) return;

        const cells = this.selectedCells.concat([cell]);
        store.commit(SELECTED_CELLS, { cells });

        if (this.selectedCells.length === 2) {
          let waitBeforeContinue = 1000;
          if (this.isWin()) {
            this.selectedCells.forEach((c) => {
              c.complete = true;
            });
            waitBeforeContinue = 0;
          }
          setTimeout(() => {
            store.commit(SELECTED_CELLS, { cells: [] });
          }, waitBeforeContinue);
        }
      },
    },
    computed: {
      ...mapState([
        'cells',
        'selectedCells',
      ]),
      cellSize() {
        switch (this.cells.length) {
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
