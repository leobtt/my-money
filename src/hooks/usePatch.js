import axios from 'axios'
import { useReducer } from 'react'
import reducer from './repeat/reducer'

const usePost = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: false,
    data: {},
  })

  const patch = async (url, data) => {
    dispatch({ type: 'REQUEST' })
    const dataP = await axios.patch(url + '.json', data)
    dispatch({ type: 'SUCCESSS' })
  }

  return [data, patch]
}

export default usePost
