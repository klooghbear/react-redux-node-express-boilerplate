import React, { Fragment } from "react"
import { HeaderTitle } from "./HeaderTitle"
import { Image } from "./Image"

import "./Header.scss"

const title = "WELCOME DEVELOPER"

export const Header = () => {
  return (
    <Fragment>
      <div className="app-header">
        <Image />

        <HeaderTitle title={ title }/>
      </div>
    </Fragment>
  )
}

export default Header