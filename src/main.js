import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { VStepper } from 'vuetify/labs/VStepper'

const vuetify = createVuetify({
  components,
  directives,
})

export default createVuetify({
    components: {
      VStepper,
    },
  })
  

createApp(App).use(vuetify).mount('#app')

