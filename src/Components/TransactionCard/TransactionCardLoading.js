import './index.css'

const TransactionCardLoading = () => {
  return (
    <>
      <div className="flex-transaction ">
        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <p className="animation-loading l10 box-loading-white"></p>
        </div>
        <div className="category-item">
          <p className="animation-loading l-icon box-loading-white"></p>
          <p className="animation-loading l10-menor box-loading-white"></p>
        </div>
        <p className="animation-loading l10-menor box-loading-white"></p>
      </div>
    </>
  )
}

export default TransactionCardLoading
