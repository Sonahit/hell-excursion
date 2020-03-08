/// <reference path='../declarations.d.ts'/>
import React, { ReactElement } from 'react'
import "./Home.scss";
import Title from './main/Title';
import Feedback from './main/Feedback';
import Ads from './main/Ads';
import { FeedbackList } from '../typings/types';

import img1 from '../assets/static/images/1.png';
import img2 from '../assets/static/images/2.png';
import img3 from '../assets/static/images/3.png';

interface Props {

}

const feedback: FeedbackList = [
  {
    img: {
      src: img1,
      alt: "feedback_photo"
    },
    name: "Колян (мсДворовой)",
    paragraphs: [
      "Ниче такая поездачка всье понравилась сервис классный кормят так се но зарубы мощные МЫ РУССКИЕ С НАМИ БОГ"
    ]
  },
  {
    img: {
      src: img2,
      alt: "feedback_photo"
    },
    name: "Лаура (ЗА 100)",
    paragraphs: [
      "От поездки была в восторге, повидалась с мужем и своими знакомыми. Кормят отлично. За бутылку даже драться не пришлось! Всем советую"
    ]
  },
  {
    img: {
      src: img3,
      alt: "feedback_photo"
    },
    name: "Депутат Георгий",
    paragraphs: [
      "Не понравилось!",
      "Не рекомендую!"
    ]
  },

]

export default function Home({}: Props): ReactElement {
  return (
    <main className="main">
      <Title />
      <Feedback feedback={feedback}/>
      <Ads/>
    </main>
  )
}
