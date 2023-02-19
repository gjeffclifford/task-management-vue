import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('pages/IndexPage.vue')},
      { path: 'create', name: 'create', component: () => import('pages/CreatePage.vue')},
      { path: 'edit/:id', name: 'create', component: () => import('pages/EditPage.vue'), props:true},
    ],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
