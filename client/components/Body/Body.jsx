import React, { Component, Fragment } from "react"

import Section from "./Section/Section"

import "./Body.scss"

export default class Body extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return(
      <Fragment>
        <div className="app-body">
          <Section />
          <Section />
          <Section />
        </div>
      </Fragment>
    )
  }
}