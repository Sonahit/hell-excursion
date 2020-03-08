import React, { ReactElement, CSSProperties, SVGProps } from 'react'

interface Props {
  className?: string,
  styles?: CSSProperties,
  svgProperties?: SVGProps<any>
}

export default function ArrowSnippet({className, styles, svgProperties}: Props): ReactElement {
  return (
    <svg id="arrow" viewBox="0 0 95 69" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  className={className} style={{...styles}} {...svgProperties}>
      <path d="M47 19.5H2V50.5H47V64.5L90.5 35L47 4V19.5Z" stroke="#ED1C24" stroke-width="4"/>
    </svg>
  )
}
