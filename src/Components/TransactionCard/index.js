import './index.css'

const TransactionCard = () => {
  return (
    <>
      <div className="flex-transaction">
        <div>
          <span style={{ color: 'green' }}>R$1.000,00</span>
          <p>Convênio</p>
        </div>
        <div className="category-item">
          <p>Icone</p>
          <p>Salário</p>
        </div>
        <p>24/01/2022</p>
      </div>
    </>
  )
}

export default TransactionCard
