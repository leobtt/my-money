import axios from 'axios'
import { useReducer } from 'react'
import reducer from './repeat/reducer'

const useDelete = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: false,
    data: {},
  })

  const remove = async (id) => {
    dispatch({ type: 'REQUEST' })
    await axios.delete(url + id + '.json')
    dispatch({ type: 'SUCCESS' })
  }

  return [data, remove]
}

export default useDelete
