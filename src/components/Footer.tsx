import React, { ReactElement } from 'react'

import './Footer.scss';

interface Props {

}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <h3>Контакты</h3>
        <div className="footer__contacts-item footer__contacts-vk">
          <p>VKontakte: expedition_end</p>
          <p>ИНСТРАМЧИК: @EXPEDITION_END</p>
        </div>
        <div className="footer__contacts-item footer__contacts-tel">
          <p>Телефануйте +375291274131</p>
          <p>Сын маминой подруги: Дядя Лёша</p>
        </div>
      </div>
      <div className="footer__form">
        <div className="footer__form-head">
          <h3>Вход/Регистрация</h3>
        </div>
        <div className="footer__form-body">
          <div className="footer__form-group">
            <div className="footer__form-control">
              <input placeholder="Логин"/>
            </div>
            <div className="footer__form-control">
              <input placeholder="Пароль"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
