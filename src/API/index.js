import useGet from '../hooks/useGet'
import usePost from '../hooks/usePost'
import useDelete from '../hooks/useDelete'
import usePatch from '../hooks/usePatch'

const baseURL = 'https://mymoney-l-default-rtdb.firebaseio.com/'

export const useMonthAPI = (date) => {
  const infoMonth = useGet(`${baseURL}meses/${date}`)
  const [dataPatch, changeMonth] = usePatch(`${baseURL}meses/${date}`)
  return { infoMonth, changeMonth }
}

export const useTransactionAPI = (date) => {
  const [removeData, removeTransaction] = useDelete(
    `${baseURL}movimentacoes/${date}/`
  )

  const [dataPost, saveTransaction] = usePost(
    `${baseURL}movimentacoes/${date}.json`
  )

  const transaction = useGet(`${baseURL}movimentacoes/${date}`)

  return { transaction, removeTransaction, saveTransaction }
}
