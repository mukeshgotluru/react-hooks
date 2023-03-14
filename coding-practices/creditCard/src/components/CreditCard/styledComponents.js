// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const CreditCardContainer = styled.div`
  width: 50%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
`
export const InputCard = styled.div`
  width: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: Roboto;
`
export const ImageElement = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 400px;
  height: 250px;
  border-radius: 10px;
  padding: 25px;
`

export const CardNumber = styled.p`
  font-family: Roboto;
  padding-top: 35px;
  padding-left: 30px;
  color: #ffffff;
  margin-top: 20px;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: Roboto;
  position: relative;
`

export const Input = styled.input`
  width: 250px;
  height: 35px;
  padding-left: 10px;
  margin-top: 15px;
`
