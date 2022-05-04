//Context
import { MainProvider } from './contexts/mainContext'
import { UsersProvider } from './contexts/userContext'
import { SocketProvider } from './contexts/socketContext'

//Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Login from './components/login'
import Home from './components/home'
import Chat from './components/chat'

import GlobalStyles, { Theme } from './components/globalStyles'

function App() {
  return (
    <MainProvider>
      <UsersProvider>
        <SocketProvider>
          <GlobalStyles />
          <Theme>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Layout>
            </Router>
          </Theme>
        </SocketProvider>
      </UsersProvider>
    </MainProvider>
  )
}

export default App
