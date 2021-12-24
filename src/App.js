import React, { useEffect, useReducer } from 'react'
import useGet from './assets/useGet'

const url =
  'https://mymoney-leobtt-default-rtdb.firebaseio.com/movimentacoes.json'

function App() {
  const data = useGet(url)
  return (
    <div>
      <h1>My Money</h1>
      {data.loading && <p>{JSON.stringify(data)}</p>}
      {!data.loading && <p>Loading...</p>}
    </div>
  )
}

export default App
