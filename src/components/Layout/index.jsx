import React, { useContext } from 'react'
import * as Styles from './styles'
import { Link } from 'react-router-dom'
import { MainContext } from '../../contexts/mainContext'

const Layout = ({ children }) => {
  const user = useContext(MainContext).name
  return (
    <Styles.Container>
      <Styles.Header>
        <h1>META Project</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {user ? (
                <Link to="/chat">Chat</Link>
              ) : (
                <Link to="/login">Chat</Link>
              )}
            </li>
          </ul>
        </nav>
      </Styles.Header>
      {children}
      <Styles.Footer></Styles.Footer>
    </Styles.Container>
  )
}

export default Layout
