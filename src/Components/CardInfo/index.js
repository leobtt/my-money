import './index.css'
import { negativeValue } from '../../utils/negativeValue'

const CardInfo = ({ Icon, title, data }) => {
  return (
    <div className="card">
      <div className="flex-top">
        <p>{title}</p>
        <Icon className={Icon.type.render.displayName} sx={{ fontSize: 35 }} />
      </div>
      <div className="moneydate">
        {data > 0 && (
          <span style={{ color: 'green' }}> R$ {data.toFixed(2)}</span>
        )}
        {data < 0 && (
          <span style={{ color: 'red' }}>R$ {negativeValue(data)}</span>
        )}
        {data === 0 && (
          <span style={{ color: 'black' }}> R$ {data.toFixed(2)}</span>
        )}

        <p>Última entrada dia 24 de Janeiro</p>
      </div>
    </div>
  )
}

export default CardInfo
