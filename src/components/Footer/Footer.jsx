import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">Иннополис</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Первый проект с 2022 года после обучения Иннополиса и получения
              диплома Соколовым И.С.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Популярные категории</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Мобильные телефоны</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Современный диван</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Кресло</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Умные часы</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Ссылки</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Магазин</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="cart">Корзина</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Авторизоваться</Link>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Политика конфиденциальности</Link>
                  </ListGroupItem>{" "}
                  {/*                   <ListGroupItem className="ps-0 border-0">
                 <Link to="/Feedback"> Обратная связь </Link>
                 </ListGroupItem> */}
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Контакты</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-user-line"></i>
                  </span>
                  <p>г.Иннополис</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>88001234567</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-send-line"></i>
                  </span>
                  <p>innnopolis@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Авторские права {year} Разработан Соколовым Иваном. Все права
              защищены!
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
