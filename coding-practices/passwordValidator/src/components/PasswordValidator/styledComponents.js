// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`

export const PasswordContainer = styled.div`
  width: 600px;
  height: 300px;
  background-color: #475569;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #fff;
  font-family: Roboto;
  font-weight: 500;
  font-size: 45px;
  line-height: 0;
`
export const Paragraph = styled.p`
  color: #fff;
  font-family: Roboto;
`
export const InputField = styled.input`
  width: 400px;
  height: 35px;
  padding: 5px;
  border: none;
  outline: none;
  margin-top: 25px;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: Roboto;
`
