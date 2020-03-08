import React, { ReactElement, PropsWithChildren } from 'react'

import './Layout.scss';

function Layout(props: PropsWithChildren<any>): ReactElement {
  return (
    <div className="page">
      {props.children}
    </div>
  )
}

export default Layout
