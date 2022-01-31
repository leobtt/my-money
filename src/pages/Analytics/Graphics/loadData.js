import _ from 'lodash'

export const loadData = (data) => {
  const values = _.groupBy(data, (value) => value.categoria)

  const result = _.map(values, (value, key) => [
    key,
    _.sumBy(values[key], (v) => v.valor),
  ])
  return [['Categoria', 'Valor'], ...result]
}
