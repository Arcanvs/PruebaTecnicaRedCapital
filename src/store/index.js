import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/modules/authentication';
import posts from '@/modules/post';
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex);

const vueLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth','posts']
});

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, bool){
      state.loading = bool 
    }
  },
  actions: {
  },
  modules: {
    auth, posts
  },
  plugins: [vueLocal.plugin]
})
