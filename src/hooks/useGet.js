import { useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from './repeat/reducer'

const useGet = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: false,
    data: {},
  })

  useEffect(() => {
    dispatch({ type: 'REQUEST' })
    axios
      .get(url + '.json')
      .then((res) => dispatch({ type: 'SUCCESS', data: res.data }))
  }, [url])
  return data
}

export default useGet
