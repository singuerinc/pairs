<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <li class="fl w-third w-10-ns pa1"
      v-on:click.stop="clickHandler()"
      v-bind:class="[{'': isCompleted}]"
  >
    <div class="aspect-ratio aspect-ratio--1x1">
      <div class="bg-pattern ma0 aspect-ratio--object" v-bind:style="getColor"></div>
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
          return `background-color: var(${this.color}); background-image: none;`;
        }
        return 'background-color: none;';
//        return `background-color: var(${this.color});`;
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
  .bg-pattern {
    background-image: url('../../static/geometry2.png');
    background-size: 100%;
    background-position: center;
  }
</style>
