import React, { ReactElement } from 'react'

import './Header.scss';
import LogoSnippet from './snippets/LogoSnippet';
import ArrowSnippet from './snippets/ArrowSnippet';
import ArrowBigSnippet from './snippets/ArrowBigSnippet';

interface Props {

}

interface Arrow {
  width?: string|number,
  height?:string|number,
  rotate: string
}

const rightArrow: Arrow =  {
  width: "100%",
  height: "100%",
  rotate: "0deg"
};

const leftArrow: Arrow =  {
  width: "100%",
  height: "100%",
  rotate: "180deg"
};

const downArrow: Arrow =  {
  width: "100%",
  height: "100%",
  rotate: "270deg"
};

const upArrow: Arrow =  {
  width: "100%",
  height: "100%",
  rotate: "90deg"
};

export default function Header({}: Props): ReactElement {

  return (
    <header className="header">
      <div className="header-logo">
        <LogoSnippet styles={{width: 130}}/>
      </div>
      <nav className="header-nav">
        <div className="header-nav__right-there">
          <ArrowSnippet styles= {rightArrow} svgProperties={{fill: "black"}}/>
          <p>туда</p>
        </div>
        <div className="header-nav__left-there">
          <ArrowSnippet styles= {leftArrow} svgProperties={{fill: "black"}}/>
          <p>сюда</p>
        </div>
        <div className="header-nav__up-there">
          <ArrowBigSnippet styles= {downArrow} svgProperties={{fill: "black"}}/>
          <p>куда-то</p>
        </div>
        <div className="header-nav__down-there">
          <ArrowBigSnippet styles= {upArrow} svgProperties={{fill: "black"}}/>
          <p>обратно</p>
        </div>
      </nav>
      <div className="header-title">
        <h1>
          Экспедиция
        </h1>
        <div className="header-title__accent text-red">
          <p>ПОИСК</p>
        </div>
      </div>
    </header>
  )
}
