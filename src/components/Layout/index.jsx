import React from 'react'
import * as Styles from './styles'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
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
              <Link to="/chat">Chat</Link>
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
