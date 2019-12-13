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
  async loadData({ commit }, month) {
    const data = await this.$axios.$get('/data.json')
    const obj = { [month]: data.data[month] }
    commit('LOAD_DATA', obj)
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
