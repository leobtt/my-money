import { useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from './repeat/reducer'

const useGet = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: false,
    data: {},
  })

  const show = async () => {
    dispatch({ type: 'REQUEST' })
    const res = await axios.get(url + '.json')
    dispatch({ type: 'SUCCESS', data: res.data })
  }

  useEffect(() => {
    show()
  }, [url])
  // refetch - faz a requisição novamente ao servidor
  return { ...data, refetch: show }
}

export default useGet
