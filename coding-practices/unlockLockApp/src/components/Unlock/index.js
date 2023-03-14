// Write your code here
import {useState} from 'react'

import {AppContainer, Heading, ImageElement, Button} from './styledComponents'

const Unlock = () => {
  const [currentState, setState] = useState(false)
  const onChangeState = () => {
    setState(prevState => !prevState)
  }

  const isClicked = currentState ? 'Lock' : 'UnLock'
  const description = currentState
    ? 'Your Device is UnLocked'
    : 'Your Device is Locked'
  const imageUrl = currentState
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const alt = currentState ? 'unlock' : 'lock'
  return (
    <AppContainer>
      <ImageElement src={imageUrl} alt={alt} />
      <Heading>{description}</Heading>
      <Button type="button" onClick={onChangeState}>
        {isClicked}
      </Button>
    </AppContainer>
  )
}

export default Unlock
