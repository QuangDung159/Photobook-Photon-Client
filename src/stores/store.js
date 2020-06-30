import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

import config from "../../config";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        result: 3432,
        listAlbum: []
    },
    mutations: {
        increment(state, payload) {
            state.result += payload.amount;
        },

        getListAlbum(state) {
            axios.get(config.API_URL + '/album/get-all')
                .then(res => {
                    let data = res.data;
                    if (data.statusCode === 200) {
                        state.listAlbum = data.listAlbum;
                    } else {
                        console.log(data.message);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    actions: {
        increment({ commit }, payload) {
            commit('increment', payload);
        },

        getListAlbum({ commit }) {
            commit('getListAlbum');
        }
    }
});

export default store;