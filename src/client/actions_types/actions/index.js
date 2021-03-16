import { REQUEST, RECEIVE, ERROR } from "../types/index.js"

export default {
  request() {
    return {
      type: REQUEST
    }
  },

  receive(skills) {
    return {
      type: RECEIVE,
      payload: skills
    }
  },

  receiveError(error) {
    return {
      type: ERROR,
      payload: error
    }
  }
}