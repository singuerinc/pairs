<template>
  <div class="w-100 pa3">
    <div class="w-100 dt near-black h2">
      <div class="w-20 v-mid dtc ph3">P1</div>
      <div class="w-60 v-mid dtc ph3 tc pointer" v-on:click="goHome()">Pairs</div>
      <div class="w-20 v-mid dtc ph3 tr">P2</div>
    </div>
    <div class="w-100 db">
      <div class="tc">
        <h1 class="f2 mt2 mb3 black-30 normal">{{message}}</h1>
        <ul class="list w-100 ma0 pa0 cf">
          <Cell v-for="(item, idx) in cells"
                v-bind:select="select"
                v-bind:key="idx"
                v-bind:idx="idx"
                v-bind:completed="isCompleted(idx)"
                v-bind:color="getColor(idx)"
                v-bind:size="cellSize"
                v-bind:selected="isSelected(idx)"
                v-bind:class="{'ba b--white': isSelected(idx)}"
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
        message: 'OK, let\'s go! Find 2 cells with the same color.',
        colors: null,
        totalCellsToComplete: null,
        completedCells: null,
      };
    },
    created() {
      this.startNewGame();
    },
    methods: {
      goHome: () => {
        router.push('/');
      },
      getColor(idx) {
        return this.colors[idx];
      },
      isCompleted(idx) {
        const match = this.completedCells.find(cell => cell.idx === idx);
        return typeof match !== 'undefined';
      },
      isSelected(idx) {
        const match = this.selectedCells.find(cell => cell.idx === idx);
        return typeof match !== 'undefined';
      },
      startNewGame() {
        const numCells = parseInt(this.$route.params.cells, 10);

        store.commit(USER_TYPE, { userType: numCells });
        store.commit(UPDATE_NUM_CELLS, { numCells });
        store.commit(SELECTED_CELLS, { cells: [] });

        this.completedCells = [];
        this.totalCellsToComplete = numCells;
        this.colors = store.getters.colors;
      },
      isWin() {
        const [cell0, cell1] = this.selectedCells;
        const equals = cell0.color === cell1.color;

        return equals;
      },
      isBoardComplete() {
        return this.completedCells.length === this.totalCellsToComplete;
      },
      select(cell) {
        if (this.isBoardComplete()) {
          return;
        }

        if (cell.selected) return;
        if (this.selectedCells.length === 2) return;

        const cells = this.selectedCells.concat([cell]);
        store.commit(SELECTED_CELLS, { cells });

        if (this.selectedCells.length === 2) {
          let waitBeforeContinue = 1000;
          if (this.isWin()) {
            this.message = 'Yay!, great!';
            this.selectedCells.forEach((c) => {
              this.completedCells.push(c);
            });
            waitBeforeContinue = 0;

            if (this.isBoardComplete()) {
              this.message = 'Wonderful! Game over.';
              setTimeout(() => {
                this.startNewGame();
                this.goHome();
              }, 2000);
            }
          } else {
            setTimeout(() => {
              this.message = 'Find 2 cells with the same color.';
              store.commit(SELECTED_CELLS, { cells: [] });
            }, waitBeforeContinue);
          }
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
