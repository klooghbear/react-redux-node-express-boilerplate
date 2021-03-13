import React, { Fragment } from "react"
import "./Header.scss"

export const Image = () => {
  return(
    <Fragment>
      <img className="app-header__image" src="/images/profile-example.png" />
    </Fragment>
  )
}

export default Image