const name = 'addContact'

const getFirstAndLastName = (state) => state[name].firstAndLastName
const getPhone = (state) => state[name].phone
const getError = (state) => state[name].error
const getErrorShown = (state) => state[name].errorShown

const selectors = {
  firstAndLastName: getFirstAndLastName,
  phone: getPhone,
  error: getError,
  errorShown: getErrorShown
}

export default selectors
