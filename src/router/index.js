import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Board from '@/components/Board';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/board/:cells',
      name: 'Board',
      component: Board,
    },
  ],
});
