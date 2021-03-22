import * as types from "../actions_types/index"

const { REQUEST, RECEIVE, ERROR } = types

export default {
  reducer(state = [], action) {
    switch (action.type) {
    case REQUEST:
      return state
    case RECEIVE:
      return action.payload
    case ERROR:
      return action.payload
    default:
      return state
    }
  }
}