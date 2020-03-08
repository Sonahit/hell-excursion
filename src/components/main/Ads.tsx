import React, { ReactElement } from 'react'


import './Ads.scss';

interface Props {

}

export default function Ads({}: Props): ReactElement {
  return (
    <aside className="main__ads">
        <div className="main__ads-top">
          <div className="main__ads-item">
            <p>РЕКЛАМА</p>
          </div>
          <div className="main__ads-item">
            <p>РЕКЛАМА</p>
          </div>
        </div>
        <div className="main__ads-bottom">
          <div className="main__ads-item">
            <p>КУРСОВЫЕ</p>
          </div>
          <div className="main__ads-item">
            <p>ПОНЧИКИ</p>
          </div>
          <div className="main__ads-item">
            <p>ГАЗОНО-<br/>КОСИЛКА</p>
          </div>
        </div>
      </aside>
  )
}
