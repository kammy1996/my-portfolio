import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// holds your root state
export const state = () => ({
  isMobile: false,
  currentProjectKey: "",
})

export const mutations = { 
  changeMobileState(state,val) { 
    state.isMobile = val
  },
  setCurrentProjectKey(state,val) { 
    state.currentProjectKey = val;
  }
}

export const getters = { 
  getMobileState(state) {
    return state.isMobile;
  },
  getCurrentProjectKey(state) { 
    return state.currentProjectKey;
  }
}
