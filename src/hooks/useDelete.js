import axios from 'axios'
import { useReducer } from 'react'
import reducer from './repeat/reducer'

const useDelete = () => {
  const [data, dispatch] = useReducer(reducer, {
    loading: false,
    data: {},
  })

  const remove = async (url) => {
    dispatch({ type: 'REQUEST' })
    await axios.delete(url + '.json')
    dispatch({ type: 'SUCCESS' })
  }

  return [data, remove]
}

export default useDelete
