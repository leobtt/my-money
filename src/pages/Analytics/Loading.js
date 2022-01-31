import './index.css'
import CardInfoLoading from '../../Components/CardInfo/CardInfoLoading'
import TransactionCardLoading from '../../Components/TransactionCard/TransactionCardLoading'

const Loading = () => {
  return (
    <>
      {/* Select Month */}

      <div className="flex">
        <p className="l10 box-loading-white animation-loading"></p>
      </div>

      <div className="info">
        <div className="vertical">
          <div className="info">
            <CardInfoLoading />
            <CardInfoLoading />
            <CardInfoLoading />
          </div>
          <div className="container">
            <h3 className="light">Transações</h3>
            {/* Item - Title - TransactionCard */}
            <div className="transaction-title">
              <div>
                <span>Valor</span>
              </div>
              <div className="category-item">
                <p>Categoria</p>
              </div>
              <p>Data</p>
            </div>
            <TransactionCardLoading />
            <TransactionCardLoading />
            <TransactionCardLoading />
            <TransactionCardLoading />
            <TransactionCardLoading />
          </div>
        </div>
        {/* analytics */}
        <div className="second-part">
          <div className="card-chart">
            <p className="animation-loading l-charts box-loading-white"></p>
            <p className="animation-loading l-charts box-loading-white"></p>
          </div>
          <div className="resume">
            <div className="resume-header">
              <p className="animation-loading l-charts box-loading-white"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading
