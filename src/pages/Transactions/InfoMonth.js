import React from 'react'
import { useMonthAPI } from '../../API'

const InfoMonth = ({ date }) => {
  const { infoMonth, changeMonth } = useMonthAPI(date)

  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

  const changeValue = async (evt) => {
    changeMonth({ [evt.target.name]: evt.target.value })
    await sleep(2000)
    infoMonth.refetch()
  }

  if (!infoMonth.loading) {
    return <p>Carregando mês...</p>
  }

  if (infoMonth.data && infoMonth.loading) {
    return (
      <>
        <p>Entradas: {infoMonth?.data.entradas}</p>
        <p>
          Previsao de entrada: {infoMonth?.data.previsao_entrada}
          <input type="text" onBlur={changeValue} name="previsao_entrada" />
        </p>
        <p>Saída: {infoMonth?.data.saidas}</p>
        <p>
          Previsao de saída: {infoMonth?.data.previsao_saida}
          <input type="text" onBlur={changeValue} name="previsao_saida" />
        </p>
      </>
    )
  }

  return null
}

export default InfoMonth
