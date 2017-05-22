<template>
  <div class="tc w-100 pa3">
    <div class="vh-100 w-100 dt">
      <div class="v-mid dtc tc">
        <ul class="list w-100 ma0 pa0">
          <li v-for="idx in new Array(50)" class="fl w-10">
            <div class="aspect-ratio aspect-ratio--1x1">
              <h1 class="ma0 aspect-ratio--object ba">cell</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router';
  import store from '../store';

  export default {
    name: 'board',
    router,
    store,
    methods: {},
    data() {
      return {};
    },
  };
</script>
