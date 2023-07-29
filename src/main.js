import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCircleXmark);
library.add(faCheckCircle);

export const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')