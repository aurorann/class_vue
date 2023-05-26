import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wel", webpackPrefetch:true */ '../views/WelcomeView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DatabindingStringView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DatabindingHtmlView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DatabindingInputView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DatabindingSelectView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/checkbox',
    name: 'DatabindingCheckboxView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DatabindingRadioView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attribute',
    name: 'DatabindingAttributeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DatabindingListView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
