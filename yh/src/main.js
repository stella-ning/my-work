import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLocalStorage from 'vue-ls' //localstorage缓存插件
import 'vant/lib/index.css'
import '@/assets/style/asset.css' //引入全局样式
import apiFn from '@/api/apiStore'
import '@/utils/util'
import loadingImg from '@/assets/images/loading.gif'
global.apiStore = apiFn.apiStore
Vue.config.productionTip = false;
console.log('loadingImg-->', loadingImg)
    //设置前缀
Vue.use(VueLocalStorage, {
        namespace: 'yh_'
    })
    // 按需加载组件
import {
    Button,
    Switch,
    Popup,
    Form,
    Field,
    Row,
    Col,
    Cell,
    CellGroup,
    Progress,
    Area,
    Icon,
    RadioGroup,
    Radio,
    Loading,
    Toast,
    CountDown,
    Image,
    Dialog,
    Divider,
    Lazyload,
    ActionSheet,
    Picker,
    List,
    PullRefresh,
    DropdownMenu,
    DropdownItem
} from 'vant';
Vue.use(Button)
    .use(Switch)
    .use(Popup)
    .use(Form)
    .use(Field)
    .use(Row)
    .use(Col)
    .use(Cell)
    .use(CellGroup)
    .use(Progress)
    .use(Area)
    .use(Icon)
    .use(RadioGroup)
    .use(Radio)
    .use(Loading)
    .use(Toast)
    .use(CountDown)
    .use(Image)
    .use(Dialog)
    .use(Divider)
    .use(ActionSheet)
    .use(Picker)
    .use(List)
    .use(PullRefresh)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Lazyload, {
        lazyComponent: true,
        loading: loadingImg
    });
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");