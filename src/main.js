//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus';
import Popper from "vue3-popper";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faRobot, faCommentDots, faPaperPlane, faRocket, faBellConcierge } from '@fortawesome/free-solid-svg-icons'

library.add(faXmark, faRobot, faCommentDots, faPaperPlane, faRocket, faBellConcierge)


import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.component("Popper", Popper);
app.mount('#app')
