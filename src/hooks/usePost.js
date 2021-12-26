import axios from 'axios'
import { useReducer } from 'react'
import reducer from './repeat/reducer'

const usePost = (url) => {
  const [data, dispatch] = useReducer(reducer, {
    loading: false,
    data: {},
  })

  const post = async (data) => {
    const dataP = await axios.post(url + '.json', data)
    dispatch({ type: 'SUCCESSS', data: dataP.data })
  }

  return [data, post]
}

export default usePost
