<template>
  <div class="tc w-100">
    <div class="vh-100 w-100 dt">
      <div class="v-mid dtc tc">
        <h1 class="f-headline ma0 near-black">Pairs</h1>
        <p class="f4 black-40 ma0 mb4 near-black">Memory game</p>
        <a v-on:click.stop="goBoard(UserTypes.ROOKIE)" class="f3 w-100 w-25-ns db di-ns red mt4 ph3 pointer">rookie</a>
        <a v-on:click.stop="goBoard(UserTypes.REGULAR)" class="f3 w-100 w-25-ns db di-ns red mt4 ph3 pointer">normal</a>
        <a v-on:click.stop="goBoard(UserTypes.PRO)" class="f3 w-100 w-25-ns db di-ns red mt4 ph3 pointer">pro</a>
        <a v-on:click.stop="goBoard(UserTypes.GOD)" class="f3 w-100 w-25-ns db di-ns red mt4 ph3 pointer">god</a>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router';
  import store from '../store';
  import * as UserTypes from '../store/user-types';

  export default {
    name: 'hello',
    router,
    store,
    methods: {
      goBoard(userType) {
        router.push(`/board/${userType}`);
      },
    },
    data() {
      return {
        UserTypes,
      };
    },
  };
</script>

<style scoped>
</style>
