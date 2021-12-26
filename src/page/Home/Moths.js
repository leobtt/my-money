import React from 'react'
import useGet from '../../hooks/useGet'
import { Link } from 'react-router-dom'

const baseURL = 'https://mymoney-leobtt-default-rtdb.firebaseio.com/'

const Months = () => {
  const data = useGet(baseURL + 'meses')

  if (!data.loading) {
    return <span className="block">Carregando...</span>
  }

  if (data.loading) {
    return (
      <table className="table  table-striped mt-4">
        <caption>Previsão financeira</caption>
        <thead>
          <tr>
            <th scope="col">Mês</th>
            <th scope="col">Previsão de entrada</th>
            <th scope="col">Entrada</th>
            <th scope="col">Previsão de saída</th>
            <th scope="col">saída</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.data).map((mes) => {
            return (
              <tr key={mes}>
                <th scope="row">
                  <Link to={`movimentacoes/${mes}`}>{mes}</Link>
                </th>
                <td>{data.data[mes].previsao_entrada}</td>
                <td>{data.data[mes].entrada}</td>
                <td>{data.data[mes].previsao_saida}</td>
                <td>{data.data[mes].saida}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Months