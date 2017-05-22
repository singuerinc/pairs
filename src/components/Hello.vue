<template>
  <div class="tc w-100">
    <div class="vh-100 w-100 dt">
      <div class="v-mid dtc tc">
        <h1 class="f-headline ma0 near-black">Pairs</h1>
        <p class="f4 black-40 ma0 near-black">Memory game</p>
        <a v-on:click.stop="goBoard()" class="f1 link red mt4 db">Play</a>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router';

  export default {
    name: 'hello',
    router,
    methods: {
      goBoard() {
        router.push('/board');
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
