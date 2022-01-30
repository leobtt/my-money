import React from 'react'
import AddMonth from './AddMonth'
import Months from './Moths'

import './index.css'

const Home = () => {
  return (
    <div>
      <div className="flex-month">
        <AddMonth />

        <Months />
      </div>
    </div>
  )
}

export default Home
