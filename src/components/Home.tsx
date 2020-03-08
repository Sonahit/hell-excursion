/// <reference path='../declarations.d.ts'/>
import React, { ReactElement, useState, useEffect } from 'react'
import "./Home.scss";
import Title from './main/Title';
import Feedback from './main/Feedback';
import Ads from './main/Ads';
import { FeedbackList } from '../typings/types';

import img1 from '../assets/static/images/1.png';
import img2 from '../assets/static/images/2.png';
import img3 from '../assets/static/images/3.png';

interface Props {
  epilepsy: boolean
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

export default function Home({epilepsy}: Props): ReactElement {
  const [interval, setClock] = useState(0) as any;
  useEffect(() => {
    let h = 0;
    let s = 100;
    let l = 50;
    const main = document.querySelector('main') as HTMLElement;
    if(epilepsy && !interval){
      let flagH = true;
      let flagS = true;
      let flagL = true;
      const maxH = 358;
      const maxS = 100;
      const maxL = 100;
      setClock(setInterval(() => {
        if (h > maxH) {
          flagH = false;
        } else if (h < 0) {
          flagH = true;
        }

        if (s > maxS) {
          flagS = false;
        } else if (s < 0) {
          flagS = true;
        }
        if (l > maxL) {
          flagL = false;
        } else if (l < 0) {
          flagL = true;
        }

        h += flagH ? 1 : -1;
        s += flagS ? 1 : -1;
        l += flagL ? 1 : -1;
        main.style.cssText = `background-color: hsl(${h}, ${s}%, ${l}%);`;
      }, 2));
    } else if(!epilepsy && interval) {
      clearInterval(interval)
      setClock(0);
      main.style.cssText = `background-color: hsl(${h}, ${s}%, ${l}%);`;
    }
  }, [epilepsy])
  return (
    <main style={{backgroundColor: `hsl(0, 100%, 50%)`}} className="main">
      <Title />
      <Feedback feedback={feedback}/>
      <Ads/>
    </main>
  )
}
