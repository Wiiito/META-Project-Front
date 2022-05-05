import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../../contexts/mainContext'
import * as Styles from './styles'

const Login = () => {
  const navigate = useNavigate()
  const { setName } = useContext(MainContext)

  function handleSubmit(e) {
    e.preventDefault()
    const user = document.getElementsByName('name')[0].value
    if (user.length > 0) {
      setName(user)
      return navigate('/chat')
    }
    console.log('Vazio')
  }

  return (
    <Styles.Container>
      <Styles.Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name or Nickname" />
        <button type="submit">Enter a chat</button>
      </Styles.Form>
    </Styles.Container>
  )
}

export default Login
