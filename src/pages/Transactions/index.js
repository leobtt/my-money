import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useTransactionAPI } from '../../API'
import AddTransaction from './AddTransaction'
import InfoMonth from './InfoMonth'

const Transactions = () => {
  const date = useParams().data

  //API
  const { transaction, removeTransaction, saveTransaction } =
    useTransactionAPI(date)

  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

  const doRemove = async (id) => {
    await removeTransaction(id)

    transaction.refetch()
    await sleep(5000)
    // infoMonth.refetch()
  }

  if (transaction.error === 'Permission denied') {
    return <Navigate replace to={'/login'} />
  }

  return (
    <>
      <h2 className="mt-5 mb-4">
        Movimentações do mês {date.replace(/^([0-9]+)[-](\d+)/g, '$2/$1')}
      </h2>
      <InfoMonth date={date} />

      <table className="table table-striped">
        <caption>Financeiro descritivo do mês</caption>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {/* percorrendo os dados vindo do banco  */}

          {transaction.data &&
            Object.keys(transaction.data).map((item) => {
              return (
                <tr key={item}>
                  <td>{transaction.data[item].descricao}</td>
                  <td>{`R$ ${transaction.data[item].valor
                    .toFixed(2)
                    .replace(/\./g, ',')}`}</td>
                  <td>
                    <button
                      className="px-4 btn btn-danger"
                      onClick={() => doRemove(item)}
                      type="button"
                    >
                      -
                    </button>
                  </td>
                </tr>
              )
            })}
          {!transaction.loading && (
            <tr>
              <td>Carregando...</td>
            </tr>
          )}

          <AddTransaction
            saveTransaction={saveTransaction}
            transaction={transaction}
          />
        </tbody>
      </table>
      {JSON.stringify(transaction.data, null, 2)}
    </>
  )
}

export default Transactions
