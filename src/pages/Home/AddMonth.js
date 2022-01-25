import React, { useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'

const AddMonth = () => {
  const [date, setDate] = useState('')
  const getYear = new Date().getFullYear()
  const year = []
  const month = []
  const refYear = useRef()
  const refMonth = useRef()
  for (let i = 2020; i <= getYear; i++) {
    year.push(i)
  }

  for (let i = 1; i <= 12; i++) {
    month.push(i.toString().padStart(2, '0'))
  }

  const getDate = () => {
    const fullDate = refYear.current.value + '-' + refMonth.current.value
    setDate(fullDate)
  }

  if (date !== '') {
    return <Navigate replace to={`/movimentacoes/${date}`} />
  }

  return (
    <React.Fragment>
      <select ref={refMonth}>
        {month.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select ref={refYear}>
        {year.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button onClick={getDate} type="button">
        Adicionar mês
      </button>
    </React.Fragment>
  )
}

export default AddMonth
