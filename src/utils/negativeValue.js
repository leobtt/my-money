export const negativeValue = (data) => {
  if (data !== undefined) {
    const value = data.toString().replace(/^[-]/g, '')
    return parseFloat(value).toFixed(2)
  }
  return data
}
