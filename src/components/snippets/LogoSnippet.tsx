import React, { ReactElement, CSSProperties, SVGProps } from 'react'

interface Props {
  className?: string,
  styles?: CSSProperties,
  svgProperties?: SVGProps<any>
}

export default function LogoSnippet({className, styles, svgProperties}: Props): ReactElement {
  return (
    <svg id="logo" viewBox="0 0 87 76" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  className={className} style={{...styles}} {...svgProperties}>
      <path d="M3 24V18.5L4.5 13.5L8 7.5L14.5 3.5H22L28.5 4.5L34 7.5L44.5 20L47 15L50.5 10.5L59.5 4L66.5 3L74.5 4L80 8L83 13.5L84.5 19V24L83.5 32.5L80.5 40.5L75 48.5L69 55.5L63 61L56 66L43.5 72.5L31 66L24 61L18 55.5L12 48.5L6.5 40.5L3.5 32.5L3 21" stroke="#ED1C24" strokeWidth="5"/>
      <path d="M18.5556 19.7143L7 24.5L18.5556 29.2857L23 40L27.4444 29.2857L39 24.5L27.4444 19.7143L23 9L18.5556 19.7143Z" stroke="#ED1C24" strokeWidth="5"/>
      <path d="M59.5556 19.7143L48 24.5L59.5556 29.2857L64 40L68.4444 29.2857L80 24.5L68.4444 19.7143L64 9L59.5556 19.7143Z" stroke="#ED1C24" strokeWidth="5"/>
      <path d="M63.5 60L59 51.5L54.5 40.5L48 27.5L44.5 22L41.5 27.5L34 40.5L27.5 51.5L23 60" stroke="#ED1C24" strokeWidth="5"/>
    </svg>
  )
}
