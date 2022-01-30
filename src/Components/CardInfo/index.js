import './index.css'

const CardInfo = ({ Icon }) => {
  return (
    <div className="card">
      <div className="flex-top">
        <p>Receitas</p>
        <Icon className={Icon.type.render.displayName} sx={{ fontSize: 35 }} />
      </div>
      <div className="moneydate">
        <span>R$1.000,00</span>
        <p>Última entrada dia 24 de Janeiro</p>
      </div>
    </div>
  )
}

export default CardInfo
