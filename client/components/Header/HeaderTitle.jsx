import React, { Fragment } from "react"

export const HeaderTitle = ({ title }) => {
  return (
    <Fragment>
      <h1 className="app-header__title">
        { title }
      </h1>
    </Fragment>
  )
}

export default HeaderTitle