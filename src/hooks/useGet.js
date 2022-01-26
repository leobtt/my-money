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
    try {
      const res = await axios.get(url + '.json')
      if (res.data.error && Object.keys(res.data.error).length > 0) {
        dispatch({ type: 'FAILURE', error: res.data.error })
      } else {
        dispatch({ type: 'SUCCESS', data: res.data })
      }
      //dispatch({ type: 'SUCCESS', data: res.data })
    } catch (err) {
      dispatch({ type: 'FAILURE', error: 'unknown error' })
    }
  }

  useEffect(() => {
    show()
  }, [url])
  // refetch - faz a requisição novamente ao servidor
  return { ...data, refetch: show }
}

export default useGet
