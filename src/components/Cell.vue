<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <li class="fl ma0 pa0 ba b--white"
      v-on:click.stop="clickHandler()"
      v-bind:style="getColor"
      v-bind:class="[{'': isCompleted}, size]"
  >
    <div class="aspect-ratio aspect-ratio--1x1">
      <h1 class="ma0 aspect-ratio--object"></h1>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'cell',
    props: ['color', 'idx', 'size', 'select', 'selected', 'completed'],
    data() {
      return {
      };
    },
    computed: {
      getColor() {
        if (this.isCompleted || this.isSelected) {
          return `background-color: var(${this.color});`;
        }
        return 'background-color: #111111;';
      },
      isSelected() {
        return this.selected;
      },
      isCompleted() {
        return this.completed;
      },
    },
    methods: {
      clickHandler() {
        this.select(this);
      },
    },
  };
</script>

<style scoped>
</style>
