import React, { ReactElement, CSSProperties } from 'react'
interface Props {
  id: string,
  className?: string,
  styles?: CSSProperties
}

export default function AssetsHelper({ id, className = "", styles={} }: Props): ReactElement {

  return (
  <svg focusable="false" className={className} style={styles}>
    <use xlinkHref={`/assets/svg/sprites.svg#${id}`}/>
  </svg>
  )
}
