import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import './header.css'
import InfoPage from './InfoPage'
import Sidebar from './Sidebar'

import { Link } from 'react-router-dom'
import {
  AccountBalance as HomeIcon,
  AssessmentOutlined as AnalyticsIcon,
} from '@mui/icons-material/'

import { Dashboard as DashboardIcon } from '@mui/icons-material/'

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  // sair da sessão
  const logout = () => {
    setToken(localStorage.removeItem('token'))
  }

  // Se não existir sessão
  if (token === undefined || token === null || !token) {
    return <Navigate replace to="/login" />
  }

  return (
    <>
      <div className="flex-header">
        <div className="sidebar">
          <Link to="/" className="link">
            <HomeIcon fontSize="large" />
          </Link>
          <Link to="/" className="link ">
            <AnalyticsIcon fontSize="large" />
          </Link>
        </div>
        <div className="center">
          <header className="header">
            <div className="dashboard">
              <DashboardIcon sx={{ fontSize: 50 }} />
              <div>
                <h2 className="text-shadow">Dashboard</h2>
                <p className="text-shadow">Informações do mês</p>
              </div>
            </div>
            <h1>My Money</h1>
          </header>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
