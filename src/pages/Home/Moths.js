import React from 'react'
import useGet from '../../hooks/useGet'
import { Link } from 'react-router-dom'

// const baseURL = 'https://mymoney-leobtt-default-rtdb.firebaseio.com/'
const baseURL = 'https://mymoney-l-default-rtdb.firebaseio.com/'

const Months = () => {
  const data = useGet(baseURL + 'meses')

  if (!data.loading) {
    return <p className="block">Carregando...</p>
  }

  if (data.loading) {
    return (
      <table className="table table-striped mt-4">
        <caption>Previsão financeira</caption>
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Mês
            </th>
            <th scope="col">Previsão de entrada</th>
            <th scope="col">Entrada</th>
            <th scope="col">Previsão de saída</th>
            <th scope="col">saída</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {Object.keys(data.data).map((mes) => {
            return (
              <tr key={mes}>
                <th scope="row" className="text-center">
                  <Link
                    className="text-decoration-none btn btn-primary"
                    to={`movimentacoes/${mes}`}
                  >
                    {mes}
                  </Link>
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
