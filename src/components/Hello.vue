<template>
  <div class="tc w-100">
    <div class="vh-100 w-100 dt">
      <div class="v-mid dtc tc">
        <h1 class="f-headline ma0 near-black">Pairs</h1>
        <p class="f4 black-40 ma0 mb4 near-black">Memory game</p>
        <a v-on:click.stop="goBoard(10)" class="f3 link red mt4 ph3">rookie</a>
        <a v-on:click.stop="goBoard(20)" class="f3 link red mt4 ph3">normal</a>
        <a v-on:click.stop="goBoard(50)" class="f3 link red mt4 ph3">pro</a>
        <a v-on:click.stop="goBoard(200)" class="f3 link red mt4 ph3">god</a>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router';
  import store from '../store';

  export default {
    name: 'hello',
    router,
    store,
    methods: {
      goBoard(numCells) {
        router.push(`/board/${numCells}`);
      },
    },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>
