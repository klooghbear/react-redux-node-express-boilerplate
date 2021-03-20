import React, { Fragment } from "react"

import IMAGE from "Utilities/assets/example.png"

import "./Header.scss"

export const Image = () => {
  return(
    <Fragment>
      <img 
        className="app-header__image" 
        src={ IMAGE }
      />
    </Fragment>
  )
}

export default Image