import React, { Component, Fragment } from "react"

import "./App.scss"

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Fragment>
        <div className="app">
          <h1>
            Welcome developer!
          </h1>
        </div>
      </Fragment>
    )
  }
}
