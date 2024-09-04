import { Facebook, Instagram, Twitter } from "lucide-react";
import "./footer.css";
import React from "react";

const Footer:React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="content-container grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            GadgetStarteg
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <div className="social-icon" >
                  <Instagram />
                </div>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <div className="social-icon">
                  <Facebook />
                </div>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <div className="social-icon" >
                  <Twitter />
                </div>
              </a>
            </li>
          </ul>

          <p className="copyright">
            Авторские права &copy; <span className="year">{year}</span>{" "}
            GadgetStrateg, Inc. Все права защищены
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Связаться с нами</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@gadgetStrateg.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Аккаунт</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Создать аккаунт
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Войти
              </a>
            </li>

            <li>
              <a className="footer-link" href="#">
                Android приложение
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">О Компании</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                О GadgetStrateg
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                для бизнеса
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Партнеры
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Карьера
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Ресурсы</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Каталог товаров
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Поддержка
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Конфиденциальность
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
