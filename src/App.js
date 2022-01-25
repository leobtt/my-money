import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './pages/Home/index'
import Movimentacoes from './pages/Movimentacoes'
import Login from './pages/Login'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="login" exact element={<Login />} />
          <Route path="" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/movimentacoes/:data" element={<Movimentacoes />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
