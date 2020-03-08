import React, { ReactElement, CSSProperties, SVGProps } from 'react'

interface Props {
  className?: string,
  styles?: CSSProperties,
  svgProperties?: SVGProps<any>
}

export default function ArrowBigSnippet({className, styles, svgProperties}: Props): ReactElement {
  return (
    <svg id="arrow-big" viewBox="0 0 221 214" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  className={className} style={{...styles}} {...svgProperties}>
      <path d="M109.75 40.25L216.25 106.75L109.75 173.25L109.75 139.75L2.75 139.75L2.75 73.75L109.75 73.75L109.75 40.25Z" stroke="#ED1C24" stroke-width="5"/>
    </svg>
  )
}
