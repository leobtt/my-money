import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="nav bg-dark text-white py-3 mb-4">
        <div className="container-md">
          <h1>
            <Link className="text-white text-decoration-none" to="/">
              My Money
            </Link>
          </h1>
        </div>
      </nav>
      <div className="container-md">
        <Outlet />
      </div>
    </>
  )
}

export default Header
