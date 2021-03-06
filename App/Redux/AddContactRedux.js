// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- State Type ------------- */

export type ErrorType = {
  message: string,
  code: number
}

type StateType = {
  fetching: boolean,
  error: ?ErrorType,
  errorShown: boolean,
  firstAndLastName: string,
  phone: string
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators }: { Types: Array<string>, Creators: () => mixed } =
  createActions({
    setFirstAndLastName: ['firstAndLastName'],
    setPhone: ['phone'],
    createContactRequest: ['firstAndLastName', 'phone', 'callback'],
    createContactSuccess: ['contact'],
    createContactFailure: ['error'],
    toggleErrorShown: null
  })

export const AddContactTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE: StateType = Immutable({
  fetching: false,
  error: {
    message: null,
    code: null
  },
  errorShown: false,
  firstAndLastName: '',
  phone: ''
})

/* ------------- Reducers ------------- */

const merge = (path: string) => (state: StateType, action): StateType =>
  state.merge({ [path]: action[path] })

export const request = (state: StateType): StateType =>
  state.merge({ fetching: true })

export const success = (state: StateType): StateType =>
  state.merge({ fetching: false, error: null })

export const failure = (state: StateType, { error }: { error: ErrorType }): StateType =>
  state.merge({ fetching: false, error, errorShown: true })

export const toggleErrorShown = (state: StateType): StateType =>
  state.merge({ errorShown: !state.errorShown })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer: (state: StateType, action: {}) => mixed = createReducer(INITIAL_STATE, {
  [Types.SET_FIRST_AND_LAST_NAME]: merge('firstAndLastName'),
  [Types.SET_PHONE]: merge('phone'),
  [Types.CREATE_CONTACT_REQUEST]: request,
  [Types.CREATE_CONTACT_SUCCESS]: success,
  [Types.CREATE_CONTACT_FAILURE]: failure,
  [Types.TOGGLE_ERROR_SHOWN]: toggleErrorShown
})
