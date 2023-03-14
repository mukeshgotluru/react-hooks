// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  Heading,
  PasswordContainer,
  Paragraph,
  InputField,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordInput, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputField
          type="password"
          value={passwordInput}
          onChange={onChangePassword}
        />
        {passwordInput.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordContainer>
    </AppContainer>
  )
}
export default PasswordValidator
