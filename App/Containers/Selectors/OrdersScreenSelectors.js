const name = 'orders'

const getOrders = (state) => state[name].orders
const getError = (state) => state[name].error
const getErrorShown = (state) => state[name].errorShown

const selectors = {
  orders: getOrders,
  error: getError,
  errorShown: getErrorShown
}

export default selectors
