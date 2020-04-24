import Constant from '@/Constant'

const state = {
  title: 'origin title',
  user: null,
  token: '',
  claims: null,
  firebaseLoaded: false
}

// getters
const getters = {
  level (state) {
    return state.claims ? state.claims.level : null
  }
}

// actions
const actions = {
  async getUser ({ commit }, user) {
    commit(Constant.SET_USER, user)
    if (user) {
      const token = await user.getIdToken(true)
      commit(Constant.SET_TOKEN, token)

      const { claims } = await user.getIdTokenReuslt(true)
      commit(Constant.SET_CLAIMS, claims)
    }
    commit(Constant.SET_FIREBASE_LOADED, true)
  }
}

// mutations
const mutations = {
  [Constant.SET_TITLE]: ($state, $payload) => {
    $state.title = $payload
  },
  [Constant.SET_USER]: ($state, $payload) => {
    $state.user = $payload
  },
  [Constant.SET_TOKEN]: ($state, $payload) => {
    $state.token = $payload
  },
  [Constant.SET_CLAIMS]: ($state, $payload) => {
    $state.claims = $payload
  },
  [Constant.SET_FIREBASE_LOADED]: ($state, $payload) => {
    $state.firebaseLoaded = $payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
