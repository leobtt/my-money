/* state = dados, action = dispatch */
const reducer = (state, { type, data, error }) => {
  if (type === 'REQUEST') return { ...state, loading: false }
  if (type === 'SUCCESS') return { ...state, loading: true, data: data }
  if (type === 'FAILURE') return { ...state, loading: false, error, data: {} }
  return state
}

export default reducer
