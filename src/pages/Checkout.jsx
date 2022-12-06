import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "components/Helmet/Helmet";
import CommonSection from "components/UI/CommonSection";

import "styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Ваш заказ :">
      <CommonSection title="Ваш заказ :" />

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Платежная информация :</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Введите ваше имя" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Введите ваше email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Номер телефона" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Адрес улицы" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Город" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Почтовый Код" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Страна" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Общее количество : <span>{totalQty} штук(и)</span>
                </h6>
                <h6>
                  Промежуточный итог : <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Перевозки : <br />
                    бесплатная доставка
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Общая стоимость : <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Разместить заказ =>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
