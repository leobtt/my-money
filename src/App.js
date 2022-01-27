import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './pages/Home/index'
import Login from './pages/Login'
import Transactions from './pages/Transactions'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/movimentacoes/:data" element={<Transactions />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
