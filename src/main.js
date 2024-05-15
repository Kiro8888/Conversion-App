// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../css/components.css' 
import '../css/home.css' 
import '../css/nvar.css' 
import '../css/style.css' 

createApp(App).use(router).mount('#app')
