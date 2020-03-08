import React, { ReactElement } from 'react'
import StarSnippet from '../snippets/StarSnippet';

import './Title.scss';

interface Props {

}

export default function Title({}: Props): ReactElement {
  return (
    <section className="main__title">
        <div className="main__title-logo">
          <h2 className="to-upper">Скидка 99%</h2>
          <div className="main__title__offer">
            <StarSnippet svgProperties={{fill: "#EC1B24"}}/>
          </div>
        </div>
        <div className="main__title-top">
          <div className="main__title-top__content">
            <h2>Поездка в АД!!!</h2>
            <div className="main__title__item">
              <p>Вас ждём незабываемая поездка длинною в вечность. ВЫ не сможете передать свои эмоции родным и близком. Но это будет лучшее приключение в Вашей жизни</p>
            </div>
          </div>
        </div>
        <div className="main__title-bottom">
          <div className="main__title-bottom__inner">
            <div className="main__title__item">
              <p className="to-upper">Купить сейчас!!</p>
              <p>9000 р + доставка</p>
            </div>
          </div>
        </div>
      </section>
  )
}
