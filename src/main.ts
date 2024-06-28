import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1. 引入你需要的组件
import { Form, Field, CellGroup,Button, Tabbar, TabbarItem, Search,Swipe, SwipeItem   } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import "tailwindcss/tailwind.css"
import "./style.css"
createApp(App).use(Form).use(Field).use(CellGroup).use(Button).use(Tabbar).use(TabbarItem).use(Search).use(Swipe).use(SwipeItem).use(store).use(router).mount('#app')
