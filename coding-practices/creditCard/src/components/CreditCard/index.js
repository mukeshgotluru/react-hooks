// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  Heading,
  InputCard,
  ImageElement,
  CardNumber,
  Paragraph,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setCardName(event.target.value)
  }
  return (
    <AppContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <ImageElement data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <Paragraph>CARDHOLDER NAME</Paragraph>
          <CardNumber>{cardName}</CardNumber>
        </ImageElement>
      </CreditCardContainer>
      <InputCard>
        <Heading>Payment Method</Heading>
        <Input
          id="cardNumber"
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={onChangeCardNumber}
        />
        <Input
          id="cardName"
          type="text"
          placeholder="Cardholder Name"
          value={cardName}
          onChange={onChangeCardName}
        />
      </InputCard>
    </AppContainer>
  )
}
export default CreditCard
