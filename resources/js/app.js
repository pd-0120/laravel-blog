import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import axios from "axios";

window.axios = axios
InertiaProgress.init()

createInertiaApp({
//   resolve: name => require(`./Pages/${name}`),
  title: title => `${title}`,
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
