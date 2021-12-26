const reducer = (state, { type, data }) => {
  if (type === 'REQUEST') return { ...state, loading: false }
  if (type === 'SUCCESS') return { ...state, loading: true, data: data }
  return state
}

export default reducer
