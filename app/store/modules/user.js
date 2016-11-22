import * as types from '../mutation-types'

const state = {
  userName: JSON.parse(sessionStorage.getItem('user')) || {},
  newUserName: '',
  usersNumber: 0,
  usersSit: [],
  drawerState: true
}

const mutations = {
  [types.USER_ENTER](state, { user }) {
    sessionStorage.setItem('user', JSON.stringify(user.userName))
    state.usersNumber = user.usersNumber,
    state.userName = user.userName
  },
  [types.NEW_USER_ENTER](state, { user }) {
    state.usersNumber = user.usersNumber,
    state.newUserName = user.userName
  },
  [types.USER_EXIT](state) {
    sessionStorage.removeItem('user')
    state.userName = {}
  },
  [types.SET_DRAWER](state) {
    state.drawerState = true
  },
  [types.SET_SHOWER](state) {
    state.drawerState = false
  },
  [types.USER_SIT_INIT](state) {
    for(let i = 0; i < 6; i++ ){
      state.usersSit[i] = {
        userName: '',
        userId: i
      }
    }
  },
  [types.NEW_USER_SIT](state, { user }) {
    state.usersSit[user.id] = {
      userName: user.userName,
      userId: user.id
    }
  }
}

export default {
  state,
  mutations
}