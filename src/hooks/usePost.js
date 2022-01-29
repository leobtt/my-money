import axios from 'axios'
import { useReducer } from 'react'
import reducer from './repeat/reducer'

axios.defaults.validateStatus = (code) => code < 500

const usePost = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: false,
    data: {},
    error: {},
  })

  const post = async (data) => {
    dispatch({ type: 'REQUEST' })
    try {
      const res = await axios.post(url, data)
      if (res.data.error && Object.keys(res.data.error).length > 0) {
        dispatch({ type: 'FAILURE', error: res.data.error.message })
      } else {
        dispatch({ type: 'SUCCESS', data: res.data })
      }
    } catch (err) {
      dispatch({ type: 'FAILURE', error: 'unknown error' })
    }
  }

  return [data, post]
}

export default usePost
