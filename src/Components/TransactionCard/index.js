import { useParams } from 'react-router-dom'
import './index.css'
import WhichIcon from './WhichIcon'

const TransactionCard = ({
  data,
  item,
  removeTransaction,
  transaction,
  infoMonth,
}) => {
  const date = useParams().data

  const sleep = (time) => new Promise((resolve) => resolve, time)

  const doRemove = async (id) => {
    await removeTransaction(id)

    sleep(5000)
    await transaction.refetch()
    await infoMonth.refetch()
  }
  return (
    <>
      <div className="flex-transaction">
        <div>
          <span
            style={
              data.receita === true ? { color: 'green' } : { color: 'red' }
            }
          >
            R$ {data.valor.toFixed(2)}
          </span>
          <p>{data.descricao}</p>
        </div>
        <div className="category-item">
          <WhichIcon categoria={data.categoria} />
          <p>{data.categoria}</p>
        </div>
        <p>{data.data}</p>
        <button type="Button" onClick={() => doRemove(item)}>
          Remover
        </button>
      </div>
    </>
  )
}

export default TransactionCard
