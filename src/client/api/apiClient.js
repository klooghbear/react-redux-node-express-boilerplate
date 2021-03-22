import actions from "../actions_types/actions/index.js"
import request from "superagent"

const path = "/"
const { requester, receive, receiveError } = actions
const promise = request.get(path)

export const fetcher = () => {
  return (dispatch) => {
    dispatch(requester())

    return Promise.resolve(promise).then((response) => {
      const { body } = response

      dispatch(receive(body))
    }).catch((error) => {
      const { message } = error

      dispatch(receiveError(`${message} at path ${path}`))
    })
  }
}