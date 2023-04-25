import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as component from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

import './assets/main.css'

const vuetify = createVuetify({
    directives,
    components: {
        ...labs,
        ...component
    },
})

export const XAuthToken = '77f178dc0fe944df9ceb3a3d423deab1';

const app = createApp(App)

app.use(router)

app.use(vuetify).mount('#app')
