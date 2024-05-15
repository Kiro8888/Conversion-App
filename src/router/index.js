import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DistanceView from '../views/DistanceView.vue'
import TemperatureView from '../views/TemperatureView.vue'
import WeightView from '../views/WeightView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/distance', component: DistanceView },
  { path: '/temperature', component: TemperatureView },
  { path: '/weight', component: WeightView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
