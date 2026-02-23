import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isMobile: false,
    currentProjectKey: '',
  }),
  getters: {
    getMobileState: (state) => state.isMobile,
    getCurrentProjectKey: (state) => state.currentProjectKey,
  },
  actions: {
    changeMobileState(val) {
      this.isMobile = val
    },
    setCurrentProjectKey(val) {
      this.currentProjectKey = val
    },
  },
})
