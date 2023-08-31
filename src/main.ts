import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VueFire,VueFireAuth } from 'vuefire';
import { firebaseApp} from './firebase.ts' 
import { createRouter,createWebHistory } from 'vue-router';

const routes =[{
  path:"/",
  component:()=>import("./components/Login.vue")
},{
  path:"/signup",
  component:()=>import("./components/Signup.vue")
},{
  path:"/dashboard",
  component:()=>import("./components/Dashboard.vue")
}]


const router=createRouter({
  history:createWebHistory(),
  routes:routes
})


const vuetify = createVuetify({
  components,
  directives,
})

const pinia=createPinia();
const app=createApp(App);
app.use(VueFire,{firebaseApp,modules:[VueFireAuth()]})
app.use(pinia);
app.use(router)
app.use(vuetify);
app.mount('#app');
