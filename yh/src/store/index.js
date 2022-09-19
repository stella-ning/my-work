import Vue from "vue";
import Vuex from "vuex";
import {get } from 'lodash'
import router from '@/router'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pubSetting: {},
    areaList: [
      { id: 5 }
    ]

  },
  mutations: {
    setSetting(state, value) {
      state.pubSetting = value
    },
    setAreaList(state, value) {
      state.areaList = value
    }
  },
  actions: {
    getSetting({ commit }) {
      apiStore.get('/v1/index/get_setting').then(res => {
        const data = get(res, 'data') || {}
        commit('setSetting', data)
      }).catch(err => {
        console.log(err)
      })

    },
    getAreaList({ commit }) {
      apiStore.get('/v1/index/area_list').then(res => {
        let data = get(res, 'data') || []
        data.map(item => {
          item['text'] = item.name
          item['value'] = item.id
        })
        commit('setAreaList', data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {},
});