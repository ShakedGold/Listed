import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheckCircle,
	faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCircleXmark);
library.add(faCheckCircle);
library.add(faPlus);

export const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
