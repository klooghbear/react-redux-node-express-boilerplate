import React, { Component, Fragment } from "react"

import Header from "./Header/Header.jsx"
import Body from "./Body/Body.jsx"

import "./App.scss"

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Fragment>
        <div className="app">
          <Header/>
          
          <Body />
        </div>
      </Fragment>
    )
  }
}
