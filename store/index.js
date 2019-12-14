export const state = () => ({
  data: null,
  pageData: null,
  favorite: [],
  movieFilters: []
})

export const mutations = {
  LOAD_DATA(state, payload) {
    state.data = payload
  },

  SET_MOVIE_FILTERS(state, payload) {
    state.movieFilters = payload
  },

  LOAD_MOVIE(state, payload) {
    state.pageData = payload
  },

  RESET_MOVIE(state) {
    state.pageData = null
  }
}

export const actions = {
  async loadData({ commit, state }, month) {
    const data = await this.$axios.$get('/data.json')
    // const data = await this.$axios.$get(
    //   'https://movie-dvd-release.github.io/data.json'
    // )
    let filter = []
    for (let key in data.data) {
      filter.push(key)
    }
    const obj = { [month]: data.data[month] }
    commit('SET_MOVIE_FILTERS', filter)
    commit('LOAD_DATA', obj)
  },

  async loadMovie({ commit, state }, { title, month }) {
    commit('RESET_MOVIE')
    const data = await this.$axios.$get('/data.json')
    // const data = await this.$axios.$get(
    //   'https://movie-dvd-release.github.io/data.json'
    // )
    const movie = data.data[month].find(item => {
      return item.title === title
    })
    commit('LOAD_MOVIE', movie)
  }
}
