import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useGet from '../hooks/useGet'
import usePost from '../hooks/usePost'
import useDelete from '../hooks/useDelete'
import usePatch from '../hooks/usePatch'

// const baseURL = 'https://mymoney-leobtt-default-rtdb.firebaseio.com/'
const baseURL = 'https://mymoney-l-default-rtdb.firebaseio.com/'

const Movimentacoes = () => {
  const [form, setForm] = useState({
    descricao: '',
    valor: 0,
  })
  const date = useParams().data

  const [removeData, remove] = useDelete()
  const [dataPost, post] = usePost(`${baseURL}movimentacoes/${date}`)
  const { loading, data, refetch } = useGet(`${baseURL}movimentacoes/${date}`)
  const dataMes = useGet(`${baseURL}meses/${date}`)
  const [dataPatch, patch] = usePatch()

  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
  const save = async () => {
    /* form.valor.search(/^[-]?\d+(\.)?\d+?$/g) >= 0) */

    if (
      !isNaN(form.valor) &&
      form.valor.search(/^[-]?[0-9]+(\.)?[0-9]+?$/g) >= 0
    ) {
      await post({
        ...form,
        valor: parseFloat(form.valor),
      })
      refetch()
      await sleep(5000)
      dataMes.refetch()
    }
  }

  const doRemove = async (id) => {
    await remove(`${baseURL}movimentacoes/${date}/${id}`)

    refetch()
    await sleep(5000)
    dataMes.refetch()
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
    patch(`${baseURL}meses/${date}`, { [evt.target.name]: evt.target.value })
    await sleep(5000)
    dataMes.refetch()
  }

  return (
    <>
      <h2 className="mt-5 mb-4">
        Movimentações do mês {date.replace(/^([0-9]+)[-](\d+)/g, '$2/$1')}
      </h2>
      {/* {!data && (
        <div className="mt-3 alert alert-warning">
          Não existem dados listados para este mês.
        </div>
      )} */}

      <p>Entradas: {dataMes?.data.entradas}</p>
      <p>
        Previsao de entrada: {dataMes?.data.previsao_entrada}
        <input type="text" onBlur={changeValue} name="previsao_entrada" />
      </p>
      <p>Saída: {dataMes?.data.saidas}</p>
      <p>
        Previsao de saída: {dataMes?.data.previsao_saida}
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

          {data &&
            Object.keys(data).map((item) => {
              return (
                <tr key={item}>
                  <td>{data[item].descricao}</td>
                  <td>{`R$ ${data[item].valor
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
          {!loading && (
            <tr>
              <td>Carregando...</td>
            </tr>
          )}
          {loading && (
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
      {JSON.stringify(data, null, 2)}
    </>
  )
}

export default Movimentacoes
