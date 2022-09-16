import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import Vue2Editor from "vue2-editor";

// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(Vue2Editor);
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

library.add(fas)

app.mount('#app')
