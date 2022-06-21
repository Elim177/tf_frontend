import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueYouTubeEmbed from 'vue-youtube-embed'

export const $ = (window as any).jQuery

createApp(App).use(router).use(ElementPlus).use(VueYouTubeEmbed).mount('#app')
