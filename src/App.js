import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Analytics from './pages/Analytics'
import Login from './pages/Login'
import Home from './pages/Home'
import Transactions from './pages/Transactions'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/movimentacoes/:data" element={<Analytics />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
