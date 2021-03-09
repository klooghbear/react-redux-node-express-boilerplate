import React, { Component, Fragment } from "react"

import "./App.scss"
import Header from "./Header/Header"

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Fragment>
        <div className="app">
          <Header/>
        </div>
      </Fragment>
    )
  }
}
