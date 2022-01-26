import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useTransactionAPI, useMonthAPI } from '../API'

const Movimentacoes = () => {
  //gestão de formulário
  const [form, setForm] = useState({
    descricao: '',
    valor: 0,
  })
  const date = useParams().data

  //API
  const { infoMonth, changeMonth } = useMonthAPI(date)
  const { transaction, removeTransaction, saveTransaction } =
    useTransactionAPI(date)

  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

  const save = async () => {
    /* form.valor.search(/^[-]?\d+(\.)?\d+?$/g) >= 0) */

    if (
      !isNaN(form.valor) &&
      form.valor.search(/^[-]?[0-9]+(\.)?[0-9]+?$/g) >= 0
    ) {
      await saveTransaction({
        ...form,
        valor: parseFloat(form.valor),
      })
      transaction.refetch()
      await sleep(5000)
      infoMonth.refetch()
    }
  }

  const doRemove = async (id) => {
    await removeTransaction(id)

    transaction.refetch()
    await sleep(5000)
    infoMonth.refetch()
  }

  const getValue =
    (field) =>
    ({ target }) => {
      setForm({
        ...form,
        [field]:
          field === 'descricao'
            ? target.value
            : parseFloat(target.value.replace(/,/g, '.')).toFixed(2),
      })
    }

  const changeValue = async (evt) => {
    changeMonth({ [evt.target.name]: evt.target.value })
    await sleep(5000)
    infoMonth.refetch()
  }

  if (transaction.error === 'Permission denied') {
    return <Navigate replace to={'/login'} />
  }

  return (
    <>
      {JSON.stringify(transaction.error)}
      <h2 className="mt-5 mb-4">
        Movimentações do mês {date.replace(/^([0-9]+)[-](\d+)/g, '$2/$1')}
      </h2>
      {/* {!data && (
        <div className="mt-3 alert alert-warning">
          Não existem dados listados para este mês.
        </div>
      )} */}

      <p>Entradas: {infoMonth?.data.entradas}</p>
      <p>
        Previsao de entrada: {infoMonth?.data.previsao_entrada}
        <input type="text" onBlur={changeValue} name="previsao_entrada" />
      </p>
      <p>Saída: {infoMonth?.data.saidas}</p>
      <p>
        Previsao de saída: {infoMonth?.data.previsao_saida}
        <input type="text" onBlur={changeValue} name="previsao_saida" />
      </p>

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
          {transaction.loading && (
            <tr>
              <td>
                <input
                  onChange={getValue('descricao')}
                  value={form.description}
                  type="text"
                ></input>
              </td>
              <td>
                <input
                  onChange={getValue('valor')}
                  value={form.value}
                  type="text"
                ></input>
              </td>
              <td>
                <button
                  className="px-4 btn btn-success"
                  onClick={save}
                  type="button"
                >
                  +
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {JSON.stringify(transaction.data, null, 2)}
    </>
  )
}

export default Movimentacoes
