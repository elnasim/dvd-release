export const state = () => ({
  data: null,
  pageData: null,
  favorite: []
})

export const mutations = {
  LOAD_DATA(state, payload) {
    state.data = payload
  },

  LOAD_MOVIE(state, payload) {
    state.pageData = payload
  },

  RESET_MOVIE(state) {
    state.pageData = null
  }
}

export const actions = {
  async loadData({ commit }) {
    const data = await this.$axios.$get('/data.json')
    commit('LOAD_DATA', data)
  },

  async loadMovie({ commit }, { title, month, year }) {
    commit('RESET_MOVIE')
    const data = await this.$axios.$get('/data.json')
    const movie = data.data[year][month].find(item => {
      return item.title === title
    })
    commit('LOAD_MOVIE', movie)
  }
}
