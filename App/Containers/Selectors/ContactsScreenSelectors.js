const name = 'contacts'

const getContacts = (state) => state[name].contacts
const getError = (state) => state[name].error
const getErrorShown = (state) => state[name].errorShown

const selectors = {
  contacts: getContacts,
  error: getError,
  errorShown: getErrorShown
}

export default selectors
