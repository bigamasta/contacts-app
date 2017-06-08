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
  contacts: Array<ContactType>,
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchContactsRequest: null,
  fetchContactsSuccess: ['contacts'],
  fetchContactsFailure: null
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

export const request = (state: StateType) =>
  state.merge({ fetching: true })

export const success = (path) => (state: StateType, action) =>
  state.merge({ fetching: false, error: null, [path]: action[path] })

export const failure = (path) => (state: StateType) =>
  state.merge({ fetching: false, error: true, [path]: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_CONTACTS_REQUEST]: request,
  [Types.FETCH_CONTACTS_SUCCESS]: success('contacts'),
  [Types.FETCH_CONTACTS_FAILURE]: failure('contacts')
})