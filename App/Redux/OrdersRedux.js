// @Flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- State Type ------------- */
export type ContactType = {
  id: ?string,
  name: ?string,
  phone: ?string,
  pictureUrl?: string
}

type StateType = {
  fetching: boolean,
  error: boolean,
  contacts: Array<ContactType>
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  contactsRequest: null,
  contactsSuccess: ['contacts'],
  contactsFailure: null
})

export const OrdersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE: StateType = Immutable({
  fetching: null,
  error: null,
  contacts: null
})

/* ------------- Reducers ------------- */

// request the temperature for a city
export const request = (state: StateType) =>
  state.merge({ fetching: true })

// successful temperature lookup
export const success = (state: StateType, action) => {
  const { contacts } = action
  return state.merge({ fetching: false, error: null, contacts })
}

// failed to get the temperature
export const failure = (state: StateType) =>
  state.merge({ fetching: false, error: true, contacts: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONTACTS_REQUEST]: request,
  [Types.CONTACTS_SUCCESS]: success,
  [Types.CONTACTS_FAILURE]: failure
})
