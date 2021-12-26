import React from 'react'

const AddMonth = () => {
  return (
    <React.Fragment>
      <select>
        <option>01</option>
        <option>02</option>
      </select>
      <select>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <button type="button">Adicionar mês</button>
    </React.Fragment>
  )
}

export default AddMonth
