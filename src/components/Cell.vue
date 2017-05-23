<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <li class="fl ma0 pa0" v-bind:style="getColor" v-bind:class="size">
    <div class="aspect-ratio aspect-ratio--1x1">
      <h1 class="ma0 aspect-ratio--object"></h1>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'cell',
    props: ['idx', 'size', 'color'],
    computed: {
      getColor() {
        return `background-color: var(${this.color});`;
      },
    },
  };
</script>
