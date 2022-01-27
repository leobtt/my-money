import { useState } from 'react'

const AddTransaction = ({ saveTransaction, transaction }) => {
  const [form, setForm] = useState({
    descricao: '',
    valor: 0,
  })
  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

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
      //infoMonth.refetch()
    }
  }

  return (
    <>
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
          <button className="px-4 btn btn-success" onClick={save} type="button">
            +
          </button>
        </td>
      </tr>
    </>
  )
}

export default AddTransaction
