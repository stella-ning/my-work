import Vue from 'vue';
import VueRouter from 'vue-router';
import guests from '../views/guests.vue';
import agenda from '../views/agenda.vue';
import news from '../views/news.vue'
import videos from '../views/videos.vue'
import viewpointDetail from '../views/viewpointDetail.vue'
import liveBroadcast from '../views/liveBroadcast.vue'
Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: '/videos',
        name: 'videos',
        component: guests,
    },
    {
        path: "/videos",
        name: "videos",
        component: guests,
    },
    {
        path: "/agenda",
        name: "agenda",
        query: {
            city_id: ''
        },
        component: agenda,
    },
    {
        path: "/news",
        name: "news",
        query: {
            city_id: ''
        },
        component: news,
    },
    {
        path: "/guests",
        name: "guests",
        query: {
            city_id: ''
        },
        component: videos,
    },
    {
        path: "/viewpointDetail",
        name: "viewpointDetail",
        component: viewpointDetail,
    },
    {
        path: "/liveBroadcast",
        name: "liveBroadcast",
        component: liveBroadcast,
    },

];

const router = new VueRouter({
    routes,
});

export default router;