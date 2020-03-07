import React, { ReactElement } from 'react'

import './Header.scss';
import AssetsHelper from '@utils/AssetsHelper';

interface Props {

}

export default function Header({}: Props): ReactElement {
  return (
    <header className="header">
      Header
      <div style={{width: 100}}>
        <AssetsHelper id="arrow"/>
        <AssetsHelper id="logo" styles={{backgroundColor: 'black'}} />
      </div>
    </header>
  )
}
