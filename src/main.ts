import { createApp } from "vue";

import { createPinia } from "pinia";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia).mount("#app");
