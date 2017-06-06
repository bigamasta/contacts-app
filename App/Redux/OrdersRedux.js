import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  contactsRequest: null,
  contactsSuccess: ['contacts'],
  contactsFailure: null
})

export const OrdersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  username: null,
  contacts: null
})

/* ------------- Reducers ------------- */

// request the temperature for a city
export const request = (state, { username }) =>
  state.merge({ fetching: true, username, avatar: null })

// successful temperature lookup
export const success = (state, action) => {
  const { contacts } = action
  return state.merge({ fetching: false, error: null, contacts })
}

// failed to get the temperature
export const failure = (state) =>
  state.merge({ fetching: false, error: true, contacts: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONTACTS_REQUEST]: request,
  [Types.CONTACTS_SUCCESS]: success,
  [Types.CONTACTS_FAILURE]: failure
})
