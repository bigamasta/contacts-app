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

const { Types, Creators }: { Types: Array<string>, Creators: () => mixed } = createActions({
  fetchContactsRequest: null,
  fetchContactsSuccess: ['contacts'],
  fetchContactsFailure: null
})

export const ContactsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE: StateType = Immutable({
  fetching: false,
  error: false,
  contacts: []
})

/* ------------- Reducers ------------- */

export const request = (state: StateType) =>
  state.merge({ fetching: true })

export const success = (path: string) => (state: StateType, action) =>
  state.merge({ fetching: false, error: null, [path]: action[path] })

export const failure = (path: string) => (state: StateType) =>
  state.merge({ fetching: false, error: true, [path]: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer: (state: StateType, action: {}) => mixed = createReducer(INITIAL_STATE, {
  [Types.FETCH_CONTACTS_REQUEST]: request,
  [Types.FETCH_CONTACTS_SUCCESS]: success('contacts'),
  [Types.FETCH_CONTACTS_FAILURE]: failure('contacts')
})
