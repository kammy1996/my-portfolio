import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// holds your root state
export const state = () => ({
  isMobile: false
})

export const mutations = { 
  changeMobileState(state,val) { 
    state.isMobile = val
  }
}

export const getters = { 
  getMobileState(state) {
    return state.isMobile;
  }
}
