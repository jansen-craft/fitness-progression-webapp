import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/Home.vue';
import Personal from './components/Personal.vue';
import OpenPowerlifting from './components/OpenPowerlifting.vue';
import EditExercise from './components/EditExercise.vue';

import AppVue from './App.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/open-powerlifting', component: OpenPowerlifting },
  { path: '/personal', component: Personal },
  { path: '/new-exercise', component: EditExercise }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(AppVue)

app.use(router)

app.mount('#app')
