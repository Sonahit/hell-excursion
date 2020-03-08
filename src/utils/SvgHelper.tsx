import React, { ReactElement, CSSProperties, SVGProps } from 'react'
interface Props {
  id: string,
  className?: string,
  styles?: CSSProperties,
  svgProperties?: SVGProps<any>
}

export default function SvgHelper({ id, className = "", styles={}, svgProperties = {} }: Props): ReactElement {

  return (
  <svg focusable="true" className={className} style={styles} {...svgProperties}>
    <use href={`/assets/svg/sprites.svg#${id}`} xlinkHref={`/assets/svg/sprites.svg#${id}`}/>
  </svg>
  )
}
