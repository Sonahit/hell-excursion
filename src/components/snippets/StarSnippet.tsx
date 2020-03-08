import React, { ReactElement, CSSProperties, SVGProps } from 'react'


interface Props {
  className?: string,
  styles?: CSSProperties,
  svgProperties?: SVGProps<any>
}

export default function ArrowBigSnippet({className, styles, svgProperties}: Props): ReactElement {
  return (
    <svg id="star" viewBox="0 0 167 152" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={className} style={{...styles}} {...svgProperties}>
      <path d="M5 112L30.5 76.5L5 39.5H55.5L83.5 4.5L111 39.5H162L137 76.5L162 112H113L83.5 147.5L55 112H5Z" stroke="black" strokeWidth="5"/>
    </svg>
  )
}
