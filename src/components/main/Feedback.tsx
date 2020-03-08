import React, { ReactElement } from 'react'
import { FeedbackItem, FeedbackList } from '../../typings/types'

import './Feedback.scss';

interface Props {
  feedback: FeedbackList
}

export default function Feedback({feedback}: Props): ReactElement {
  return (
    <section className="main__feedback">
      <div className="main__feedback-header">
        <h3>
          Отзывы
        </h3>
      </div>
      <div className="main__feedback__list">
        {feedback.map(f => <FeedbackItem {...f}/>)}
      </div>
    </section>
  )
}

interface FeedBackProps extends FeedbackItem {};

function FeedbackItem({name, paragraphs, img}: FeedBackProps): ReactElement {
  return (
    <div className="main__feedback__item">
      <div className="main__feedback__img">
        <img src={img.src} alt={img.alt}/>
      </div>
      <div className="main__feedback__content">
        <div className="main__feedback__content-top">
          <h4>{ name }</h4>
        </div>
        <div className="main__feedback__content-bottom">
          {paragraphs.map(p => <p>{p}</p>)}
        </div>
      </div>
    </div>
  )
}
