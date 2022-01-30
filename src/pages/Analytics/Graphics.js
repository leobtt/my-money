import { Chart } from 'react-google-charts'

export const data = [
  ['Salário', 'mensal'],
  ['Receitas', 1500.22],
  ['Despesas', 800.1],
  ['Saldo', 700],
]

export const options = {
  ttlePosition: 'none',
  backgroundColor: '#251e1e',
  color: 'white',
  legendTextStyle: { color: 'white' },
  titleTextStyle: { color: 'white' },
  legend: { position: 'bottom' },
  chartArea: { left: 10, top: 20, width: '100%', height: '80%' },
}

const Graphics = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Gastos</h3>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'350px'}
        height={'300px'}
        className="color-chart"
      />
    </div>
  )
}

export default Graphics
