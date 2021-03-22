import React, { Fragment } from "react"

import exampleImage from "Utilities/assets/example.png"

import "./Header.scss"

export const Image = () => {
  return(
    <Fragment>
      <img className="app-header__image" src={ exampleImage } />
    </Fragment>
  )
}

export default Image