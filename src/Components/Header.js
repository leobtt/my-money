import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

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
      <nav className="nav bg-dark text-white py-3 mb-4">
        <div className="container-md d-flex justify-content-between">
          <h1>
            <Link className="text-white text-decoration-none" to="/">
              My Money
            </Link>
          </h1>
          <button
            type="button"
            className="btn btn-danger me-5 px-4"
            onClick={logout}
          >
            Sair
          </button>
        </div>
      </nav>
      <div className="container-md">
        <Outlet />
      </div>
    </>
  )
}

export default Header
