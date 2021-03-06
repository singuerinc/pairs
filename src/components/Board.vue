<template>
  <div class="w-100 ph3">
    <div class="w-100 db near-black mv3 tc pointer" v-on:click="goHome()">Pairs</div>
    <div class="w-100 dt near-black h2">
      <div class="w-50 v-mid dtc pa2 bg-white">
        <span class="bg-near-black near-white ph3 pv2 ml0 mr2"
              v-bind:class="{'bg-green': currentPlayer === player1}"
        >{{player1.getPoints()}}</span>
        <span>{{player1.getName()}}</span>
      </div>
      <div class="w-50 v-mid dtc pa2 tr">
        <span>{{player2.getName()}}</span>
        <span class="bg-near-black near-white ph3 pv2 mr0 ml2"
              v-bind:class="{'bg-green': currentPlayer === player2}"
        >{{player2.getPoints()}}</span>
      </div>
    </div>
    <div class="w-100 db">
      <div class="tc">
        <h1 class="f4 f2-l mt2 mb3 black-30 normal">
          <span>{{message}}</span>
          <span class="f4 f2-l near-black" v-show="currentPlayer.pointsToAddOrRemove > 0">+{{10 - currentPlayer.pointsToAddOrRemove}}</span>
          <span class="near-black link pointer red" v-on:click="startNewGame()" v-show="isBoardComplete()">Start a new game</span>
        </h1>
        <ul class="list w-100 tc">
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
  import Player from '../store/player';
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
        player1: null,
        player2: null,
        currentPlayer: null,
        blocked: true,
        message: '',
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
      getNextPlayer() {
        if (this.currentPlayer === null) {
          return this.player1;
        }
        if (this.currentPlayer === this.player1) {
          return this.player2;
        }
        return this.player1;
      },
      getWinner() {
        if (this.player1.getPoints() > this.player2.getPoints()) {
          return this.player1;
        } else if (this.player1.getPoints() < this.player2.getPoints()) {
          return this.player2;
        }
        return null;
      },
      startNewGame() {
        this.player1 = new Player('Player 1');
        this.player2 = new Player('P2');
        this.currentPlayer = this.getNextPlayer();
        this.message = 'OK, let\'s go! Find 2 cells with the same color.';

        const numCells = parseInt(this.$route.params.cells, 10);

        store.commit(USER_TYPE, { userType: numCells });
        store.commit(UPDATE_NUM_CELLS, { numCells });
        store.commit(SELECTED_CELLS, { cells: [] });

        this.completedCells = [];
        this.totalCellsToComplete = numCells;
        this.colors = store.getters.colors;
        this.blocked = false;
      },
      isWin() {
        const [cell0, cell1] = this.selectedCells;
        const equals = cell0.color === cell1.color;

        return equals;
      },
      isBoardComplete() {
        return this.completedCells.length === this.totalCellsToComplete;
      },
      canPlay() {
        return !this.isBoardComplete() && !this.blocked && this.selectedCells.length < 2;
      },
      select(cell) {
        if (!this.canPlay() || cell.selected) {
          return;
        }

        const cells = this.selectedCells.concat([cell]);
        store.commit(SELECTED_CELLS, { cells });

        if (this.selectedCells.length === 2) {
          let waitBeforeContinue = 1000;
          if (this.isWin()) {
            this.currentPlayer.addPoints();
            this.blocked = true;
            this.message = 'Yay!, great!';
            this.selectedCells.forEach((c) => {
              this.completedCells.push(c);
            });
            waitBeforeContinue = 1;

            if (this.isBoardComplete()) {
              const winner = this.getWinner();
              let winMessage;
              if (winner !== null) {
                winMessage = `${winner.getName()} wins!`;
              } else {
                winMessage = 'Game over, no winner today!';
              }
              this.blocked = true;
              this.message = winMessage;
            } else {
              store.commit(SELECTED_CELLS, { cells: [] });
              this.blocked = false;
            }
          } else {
            this.currentPlayer.removePoints();
            setTimeout(() => {
              this.currentPlayer = this.getNextPlayer();
              this.message = 'Ouch!';
              this.blocked = false;
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
