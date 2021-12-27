import React from 'react'
import { useParams } from 'react-router-dom'
import useGet from '../hooks/useGet'

const baseURL = 'https://mymoney-leobtt-default-rtdb.firebaseio.com/'

const Movimentacoes = () => {
  const { loading, data } = useGet(
    `${baseURL}movimentacoes/${useParams().data}`
  )

  return (
    <>
      <h1>Movimentações</h1>
      {!data && (
        <div className="mt-3 alert alert-warning">
          Não existem dados listados para este mês.
        </div>
      )}
      {data && (
        <>
          {!loading && <span>Carregando...</span>}
          {loading && (
            <table className="table table-striped">
              <caption>Financeiro descritivo do mês</caption>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {Object.keys(data).map((item) => {
                  return (
                    <tr key={item}>
                      <td>{data[item].descricao}</td>
                      <td>{data[item].valor}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </>
      )}
    </>
  )
}

export default Movimentacoes
