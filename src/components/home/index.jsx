import React from 'react'
import * as Styles from './styles'
import background from './background.jpg'
import ScrollDown from './scrollDown'

const Home = () => {
  return (
    <Styles.Container background={background}>
      <Styles.Message>Keep calm and let's talk about it</Styles.Message>
      <Styles.Scroll>
        <ScrollDown />
      </Styles.Scroll>
    </Styles.Container>
  )
}

export default Home
