import React from 'react';
import Payment from "payment"; 
import "./payment.css"; 
// import Modal from "../Modal"; 
import { Row, Col, FormGroup, Button, Alert } from 'react-bootstrap';

export class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      exp_month: null,
      exp_year: null,
      cvc: null,
      token: null,
      show: false, 
    };

    this.setCardType = this.setCardType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetCard = this.resetCard.bind(this);
  }

  resetCard() {
    this.setState({ number: null, exp_month: null, exp_year: null, cvc: null, token: null });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for your payment. \n Confirmation reciept has been sent to your Email")

    this.resetCard();

    // const { refs } = this;
    // const number = refs.number.value;
    // const expiration = refs.expiration.value.split('/');
    // const exp_month = parseInt(expiration[0], 10);
    // const exp_year = parseInt(expiration[1], 10);
    // const cvc = refs.cvc.value;
    // const card = { number, exp_month, exp_year, cvc };
  }


setCardType(event) {
  const type = Payment.fns.cardType(event.target.value);
  const cards = document.querySelectorAll('[data-brand]');

  [].forEach.call(cards, (element) => {
    if (element.getAttribute('data-brand') === type) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

renderCardList() {
  return (<ul className="credit-card-list clearfix" >
    <li><i data-brand="visa" className="fa fa-cc-visa"></i></li>
    <li><i data-brand="amex" className="fa fa-cc-amex"></i></li>
    <li><i data-brand="mastercard" className="fa fa-cc-mastercard"></i></li>
    <li><i data-brand="jcb" className="fa fa-cc-jcb"></i></li>
    <li><i data-brand="discover" className="fa fa-cc-discover"></i></li>
    <li><i data-brand="dinersclub" className="fa fa-cc-diners-club"></i></li>
  </ul>);
}

renderCardForm() {
  return (<form className="CardForm" onSubmit={ this.handleSubmit } >
    <Row>
      <Col xs={ 12 } sm={12}>
        <FormGroup>
          <input
            onKeyUp={ this.setCardType }
            className="form-control"
            type="text" 
            ref="number" 
            required="true"
            
            placeholder="Card Number" 
            />
        </FormGroup>
      </Col>
    </Row>

     <Row>
        <Col xs={ 6 } sm={ 8 }>
          <FormGroup>
           <input
              className="form-control text-center"
              type="text"
              ref="expiration"
              placeholder="MM/YYYY"
              required="true"
            />
          </FormGroup>
        </Col>
        <Col xs={ 6 } sm={ 4 } >
          <FormGroup>
            <input
              className="form-control text-center"
              type="text"
              ref="cvc"
              placeholder="CVC"
              required="true"
             
            />
          </FormGroup>
        </Col>
      </Row>
        <Button onClick={this.fillOut} type="submit" bsStyle="warning" block>Submit Payment</Button>
            
      </form>);
  }
    fillOut() {
    }

  renderCard() {
    const { number, exp_month, exp_year, cvc, token } = this.state;
    return number ? (<Alert bsStyle="info">
      <h5>{ number }</h5>
      <p className="exp-cvc">
        <span>{ exp_month }/{ exp_year }</span>
        <span>{ cvc }</span>
      </p>
      <em>{ token }</em>
    </Alert>) : '';
  }

  componentDidMount() {
    const { number, expiration, cvc } = this.refs;
    Payment.formatCardNumber(number);
    Payment.formatCardExpiry(expiration);
    Payment.formatCardCVC(cvc);
  }

  render() {
    // let smClose = () => this.setState({ smShow: false });
    return (<div className="CreditCard">
      { this.renderCardList() }
      { this.renderCardForm() }
      { this.renderCard() }
      {/* <Modal show={this.state.smShow} onHide={smClose} /> */}
    </div>);
  }
}

export default CreditCard; 



