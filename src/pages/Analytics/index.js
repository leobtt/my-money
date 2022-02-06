import { ArrowUpward, ArrowDownward, AttachMoney } from '@mui/icons-material'
import CardInfo from '../../Components/CardInfo'
import TransactionCard from '../../Components/TransactionCard'
import Loading from './Loading'
import { negativeValue } from '../../utils/negativeValue'
import { loadData } from './Graphics/loadData'

import Graphics from './Graphics'
import './index.css'

//API
import { useMonthAPI, useTransactionAPI } from '../../API'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AddTransaction from '../Transactions/AddTransaction'

const Analytics = () => {
  const [charData, setCharData] = useState([])
  const date = useParams().data
  const { infoMonth } = useMonthAPI(date)
  const { transaction, saveTransaction, removeTransaction } =
    useTransactionAPI(date)

  useEffect(async () => {
    async function getData() {
      setCharData(await loadData(transaction.data))
    }
    getData()
  }, [transaction.data])

  if (transaction.error === 'Auth token is expired') {
    localStorage.removeItem('token')
    return <Navigate replace to="/login" />
  }

  const data = [
    ['Salário', 'mensal'],
    ['Receitas', infoMonth.data.entradas],
    ['Despesas', Number(negativeValue(infoMonth.data.saidas))],
  ]

  return (
    <>
      {transaction.loading === true && (
        <>
          <div className="flex">
            <h3 className="light">Janeiro de 2022</h3>
          </div>

          <div className="info">
            {/* <div className="vertical"> */}
            <div className="first-part">
              <CardInfo
                Icon={ArrowUpward}
                title="Receita"
                data={infoMonth.data.entradas}
              />
              <CardInfo
                Icon={ArrowDownward}
                title="Despesa"
                data={infoMonth.data.saidas}
              />
              <CardInfo
                Icon={AttachMoney}
                title="Saldo"
                data={infoMonth.data.saldo}
              />
            </div>
            {/* </div> */}

            <div className="second-part">
              <h3 className="light">Transações</h3>
              {/* Item - Title - TransactionCard */}
              <div className="transaction-title">
                <div>
                  <span>Valor</span>
                </div>
                <div className="category-item">
                  <p>Categoria</p>
                </div>
                <p></p>
              </div>

              <AddTransaction
                transaction={transaction}
                saveTransaction={saveTransaction}
                infoMonth={infoMonth}
              />
              {Object.keys(transaction.data).map((item) => {
                const { data } = transaction
                return (
                  <TransactionCard
                    data={data[item]}
                    key={item}
                    item={item}
                    transaction={transaction}
                    removeTransaction={removeTransaction}
                    infoMonth={infoMonth}
                  />
                )
              })}
            </div>

            {/* analytics */}
            <div className="thrid-part">
              <div className="card-chart">
                <Graphics data={data} />
                <Graphics data={charData} />
              </div>
              {/* <div className="resume">
                <div className="resume-header">
                  <h3>
                    9 dicas para você aprender a se planejar financeiramente
                  </h3>
                  <ul>
                    <li>Nome</li>
                    <li>Telefone</li>
                    <li>Casa</li>
                    <li>Estado</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </>
      )}
      {transaction.loading === false && <Loading />}
    </>
  )
}

export default Analytics
