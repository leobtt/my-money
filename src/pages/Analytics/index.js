import {
  ArrowRight,
  ArrowLeft,
  ArrowUpward,
  ArrowDownward,
  AttachMoney,
} from '@mui/icons-material'
import CardInfo from '../../Components/CardInfo'
import TransactionCard from '../../Components/TransactionCard'

import Graphics from './Graphics'
import './index.css'

const Analytics = () => {
  return (
    <>
      {/* Select Month */}
      <div className="flex">
        <ArrowLeft className="pointer" sx={{ fontSize: 40 }} />
        <h3 className="light">Janeiro de 2022</h3>
        <ArrowRight className="pointer" sx={{ fontSize: 40 }} />
      </div>

      <div className="info">
        <div className="vertical">
          <div className="info">
            <CardInfo Icon={ArrowUpward} />
            <CardInfo Icon={ArrowDownward} />
            <CardInfo Icon={AttachMoney} />
          </div>
          <div className="container">
            <h3 className="light">Transações</h3>
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
          </div>
        </div>
        {/* analytics */}
        <div>
          <div className="card-chart">
            <Graphics />
            <Graphics />
          </div>
          <div className="resume">
            <div className="resume-header">
              <h3>Resumo</h3>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics
