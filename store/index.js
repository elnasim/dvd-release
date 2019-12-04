export const state = () => ({
  data: null,
  pageData: null
})

export const mutations = {
  LOAD_DATA(state, payload) {
    state.data = payload
  },

  LOAD_MOVIE(state, payload) {
    state.pageData = payload
  }
}

export const actions = {
  async loadData({ commit }) {
    const data = await this.$axios.$get('/data.json')
    commit('LOAD_DATA', data)
  },

  async loadMovie({ commit }, { title, month, year }) {
    const data = await this.$axios.$get('/data.json')
    const movie = data.data[year][month].find(item => {
      return item.title === title
    })
    commit('LOAD_MOVIE', movie)
  }
}
