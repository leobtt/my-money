import { useState } from 'react'

const month = () => {
  const result = new Date().getMonth() + 1
  return '0' + result
}

const AddTransaction = ({ saveTransaction, transaction, infoMonth }) => {
  const [form, setForm] = useState({
    descricao: '',
    valor: 0,
    categoria: 'Salário',
  })
  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
  const getValue =
    (field) =>
    ({ target }) => {
      setForm({
        ...form,
        [field]:
          field === 'valor'
            ? parseFloat(target.value.replace(/,/g, '.')).toFixed(2)
            : target.value,
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
        receita: form.categoria === 'Salário' ? true : false,
        data: `${new Date().getDate()}/${month()}/${new Date().getFullYear()}`,
      })
      sleep(5000)
      await transaction.refetch()
      await infoMonth.refetch()
    }
  }

  return (
    <>
      {JSON.stringify(form, null, 2)}
      <div className="flex-transaction">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            onChange={getValue('valor')}
            value={form.value}
            type="text"
            placeholder="valor"
          />

          <input
            onChange={getValue('descricao')}
            value={form.description}
            type="text"
            placeholder="descrição"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <select name="categoria" onChange={getValue('categoria')}>
            <option value="Salário">Salário</option>
            <option value="Compras">Compras</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Saúde">Saúde</option>
            <option value="Lazer">Lazer</option>
            <option value="Estudos">Estudos</option>
            <option value="Locomoção">Locomoção</option>
          </select>
        </div>
        <button type="button" onClick={save}>
          Adicionar
        </button>
      </div>
      {/* <tr>
        <td>
          <input
            onChange={getValue('descricao')}
            value={form.description}
            type="text"
          />
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
      </tr> */}
    </>
  )
}

export default AddTransaction
