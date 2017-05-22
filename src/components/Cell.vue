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
    props: ['idx', 'size'],
    computed: {
      getColor() {
        const colorNames = [
          'gray',
          'red',
//          'pink',
//          'grape',
//          'violet',
//          'indigo',
//          'blue',
//          'cyan',
          'teal',
//          'green',
//          'lime',
//          'yellow',
//          'orange',
        ];
        const randomName = () => colorNames[Math.floor(Math.random() * colorNames.length)];
        const randomNum = () => Math.floor(Math.random() * 10);
        return `background-color: var(--oc-${randomName()}-${randomNum()});`;
      },
    },
  };
</script>
