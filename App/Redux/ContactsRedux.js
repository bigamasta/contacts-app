// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- State Type ------------- */

export type ContactType = {
  id: string,
  name: string,
  phone: string,
  pictureUrl?: string
}

export type ErrorType = {
  message: ?string,
  code: ?number
}

type StateType = {
  fetching: boolean,
  error: ErrorType,
  errorShown: boolean,
  contacts: Array<ContactType>,
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators }: { Types: Array<string>, Creators: () => mixed } = createActions({
  fetchContactsRequest: null,
  fetchContactsSuccess: ['contacts'],
  fetchContactsFailure: ['error'],
  toggleErrorShown: null
})

export const ContactsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE: StateType = Immutable({
  fetching: false,
  error: {
    message: null,
    code: null
  },
  errorShown: false,
  contacts: []
})

/* ------------- Reducers ------------- */

export const request = (state: StateType) =>
  state.merge({ fetching: true })

export const success = (path: string) => (state: StateType, action: {}) =>
  state.merge({ fetching: false, error: null, [path]: action[path] })

export const failure = (path: string): () => StateType => (state: StateType, { error }: { error: ErrorType }): StateType =>
  state.merge({ fetching: false, error, errorShown: true, [path]: null })

export const toggleErrorShown = (state: StateType): StateType =>
  state.merge({ errorShown: !state.errorShown })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer: (state: StateType, action: {}) => mixed = createReducer(INITIAL_STATE, {
  [Types.FETCH_CONTACTS_REQUEST]: request,
  [Types.FETCH_CONTACTS_SUCCESS]: success('contacts'),
  [Types.FETCH_CONTACTS_FAILURE]: failure('contacts'),
  [Types.TOGGLE_ERROR_SHOWN]: toggleErrorShown
})
