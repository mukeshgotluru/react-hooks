// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  ContentContainer,
  Heading,
  Subtitle,
  Image,
  Text,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)

  return (
    <AppContainer>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <Subtitle>Hooks are a new addition to React</Subtitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Text>{description}</Text>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </AppContainer>
  )
}

export default ReadMore
